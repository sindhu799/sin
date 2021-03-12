FROM node:alpine
WORKDIR '/react-hello-world'
COPY package.json .
RUN npm install
RUN npm install axios
COPY . .
CMD ["npm","start"]