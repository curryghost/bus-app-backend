FROM node:16-alpine
ENV NODE_ENV=development PORT=3030
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3030
CMD npm start