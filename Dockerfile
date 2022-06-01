FROM node:17

LABEL org.opencontainers.image.description "HousePortal is a clean and minimal interface to monitor and control your smart devices, such as light bulbs, light switches, TVs, bluetooth speakers, and many others."

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