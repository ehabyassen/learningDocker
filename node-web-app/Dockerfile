#set up base image
FROM node:19-alpine

#copy required libs and dependencies
COPY package.json /app/
COPY src /app/

#change into the project directory
WORKDIR /app

#download the dependencies inside the container and create node modules folder inside the container before the application gets started
RUN npm install

#execute the app
CMD [ "node", "server.js" ]