FROM node:17

ENV PORT 8080

WORKDIR /app/houseportal

# Copy all files from build/ into /app/houseportal
COPY build/ .

# COPY the docker_init.sh script into /app/houseportal
COPY ./scripts/docker_init.sh .

# Install dependencies and copy the entrypoint script into /
RUN cp ./docker_init.sh /init.sh && chmod +x /init.sh
RUN yarn global add serve

EXPOSE 8080

# Run at startup
ENTRYPOINT ["/init.sh"]