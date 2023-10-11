FROM mysql:5.7

COPY ./dump /docker-entrypoint-initdb.d

ENV MYSQL_DATABASE=nodedb \
    MYSQL_ROOT_PASSWORD=root
