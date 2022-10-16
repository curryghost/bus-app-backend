FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3030
CMD npm start