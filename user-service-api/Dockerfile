# add base image
FROM node:10.16.1-alpine

# set the working directory inside the container. Any command to be executed after this command will be execute in this directory
WORKDIR /app

# add package.json and package-lock.json to the working directory
ADD package*.json ./

# install the dependencies from package.json
RUN npm install

# add the source code to the working directory in the container (/app)
ADD . .

# executes the command that starts the server
CMD node index.js