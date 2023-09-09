FROM node:20.6

WORKDIR /app

COPY package.json .

RUN npm i

# COPY . .
COPY public/ ./public
COPY src/ ./src
COPY index.html .
COPY vite.config.js .

EXPOSE 5173

CMD ["npm", "run", "dev"]
