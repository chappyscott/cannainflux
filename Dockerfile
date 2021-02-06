FROM node:stretch

VOLUME [ "/src/node_modules" ]

RUN npm i -g @angular/cli

WORKDIR /src

#COPY package.json .
#RUN npm install

CMD ["npm", "start"]
