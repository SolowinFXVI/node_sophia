# specify the node base image with your desired version node:<version>
FROM node:17
# replace this with your application's default port
EXPOSE 8888
ENV NODE_ENV=production
RUN apt-get update
RUN apt-get -y install git vim
WORKDIR /app
RUN git clone https://github.com/SolowinFXVI/node_sophia.git
WORKDIR /app/node_sophia
RUN npm install --production
CMD ["npm", "start"]
