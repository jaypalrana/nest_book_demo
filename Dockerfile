# Use the 18 version of Node.js as the base image
FROM --platform=linux/arm64 node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json 
COPY package*.json ./

RUN NODE_ENV=development npm i

# Copy the code
COPY . .

# Expose the port
EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
