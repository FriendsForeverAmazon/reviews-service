FROM mysql:5.7
ENV MYSQL_DATABASE reviews_db


ENV MYSQL_USER = root
ENV MYSQL_PASSWORD = root
ENV MYSQL_ROOT_PASSWORD = root
ENV MYSQL_DATABASE = reviews_db

COPY ./schema_files/ /docker-entrypoint-initdb.d/

