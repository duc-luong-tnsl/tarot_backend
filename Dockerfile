FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install node environment
COPY package*.json ./
RUN npm install

# Copy all source code to app
COPY . .