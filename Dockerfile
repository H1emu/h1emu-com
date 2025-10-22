FROM node:22-alpine
WORKDIR /usr/src/app
ARG VITE_GA_ID
ENV VITE_GA_ID=$VITE_GA_ID
COPY package*.json ./
RUN npm ci
COPY . .
RUN echo "DEBUG: VITE_GA_ID is '$VITE_GA_ID'"
RUN npm run build 
EXPOSE 3000
CMD [ "npm", "start" ]
