FROM node:10

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

# Running the app
CMD [ "npm","run","start" ]