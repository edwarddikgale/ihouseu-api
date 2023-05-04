# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the entrypoint script to the working directory
COPY docker-entrypoint.sh .

# Make the entrypoint script executable
RUN chown root:root docker-entrypoint.sh && \
    chmod +x docker-entrypoint.sh

# Expose port 8080
EXPOSE 8080

# Start the Node.js application
CMD ["npm", "start"]
