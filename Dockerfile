FROM node:16-alpine
WORKDIR /app
ENV NODE_ENV=development
COPY . .
RUN npm i
EXPOSE 3030
CMD npm start