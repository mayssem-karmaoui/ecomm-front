#base image
FROM node:14

#container working directory
WORKDIR /app

#copy package file
COPY package.json .

#install dependencies
RUN npm install

#copy application file 
COPY . .

EXPOSE 3000

#start the application
CMD ["npm", "start"]