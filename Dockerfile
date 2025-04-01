# Step 1: Build the application
FROM node:20-alpine3.21 as builder

WORKDIR /app

# Copy package.json and yarn.lock (or package-lock.json) to install dependencies
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files, including tsconfig.json
COPY . .

# Build the Next.js application
RUN yarn build

# Step 2: Create a lightweight production image
FROM node:20-alpine3.21 as runner

WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN yarn install --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]

