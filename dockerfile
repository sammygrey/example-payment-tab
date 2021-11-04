# STEP 1: Install base image. Optimized for Node.
FROM node:14.0.0-alpine

# STEP 3: Set working directory to /app so we can execute commands in it
WORKDIR /app

# STEP 2: add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# STEP 4: Install required dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react@^17.0.2
RUN npm install react-dom@^17.0.2
RUN npm install react-scripts@4.0.3 --silent

#no environment variables here

# STEP 5: add app
COPY . ./

# STEP 6: start node app
CMD ["npm", "start"]