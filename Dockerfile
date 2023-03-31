ARG NODE_VERSION=current-alpine3.16
ARG NGINX_VERSION=1.23.3

FROM node:${NODE_VERSION} AS admin_development
WORKDIR /usr/src/admin
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN set -eux; \
        npm install
COPY . ./
VOLUME node_modules
CMD ["npm", "start"]

FROM admin_development AS admin_build
ARG REACT_APP_API_ENTRYPOINT
RUN set -eux; \
        npm run build

FROM nginx:$NGINX_VERSION-alpine AS admin_nginx
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/
WORKDIR /usr/src/admin
COPY --from=admin_build /usr/src/admin ./

