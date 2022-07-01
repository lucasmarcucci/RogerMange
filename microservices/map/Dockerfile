FROM node

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3040

CMD [ "node", "add_point.js" ]