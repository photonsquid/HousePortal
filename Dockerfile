FROM node:17

ENV PORT 8080

WORKDIR /app/houseportal

# Copy all files from cwd into /app/houseportal
COPY . .

# Install frozen dependencies and copy 
RUN yarn install --frozen-lockfile && cp ./scripts/docker_init.sh /init.sh && chmod +x /init.sh

EXPOSE 8080

# Run at startup
ENTRYPOINT ["/init.sh"]