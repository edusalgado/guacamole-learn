FROM node:19-alpine
WORKDIR /usr/app/app
COPY package.json .
COPY index.js .
RUN npm install
EXPOSE 3000
CMD [ "node", "index.js" ]
