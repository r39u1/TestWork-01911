FROM node:16

RUN apt-get update && apt-get install -y \
    vim \
    zip \
    unzip \
    curl

USER node

CMD ["sh", "-c", "npm install && npm run serve"]