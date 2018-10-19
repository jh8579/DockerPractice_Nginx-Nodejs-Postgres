# postres/Dockerfile
FROM postgres:9.3
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWARD 1234
ENV POSTGRES_DB docker_tutorial
ADD init-table.sql /docker-entrypoint-initdb.d/