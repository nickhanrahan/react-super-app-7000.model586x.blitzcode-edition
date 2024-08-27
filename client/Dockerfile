# 1. BUILD STAGE
# Use an official Node.js runtime as a parent image
FROM node:20.11.1-alpine as build

# Set the working directory
WORKDIR /usr/src/client

# Copy only package.json and yarn.lock for caching dependencies
COPY ["package.json", "yarn.lock", "./"]

RUN yarn cache clean
RUN yarn install --ignore-optional
COPY . ./

RUN yarn run build

# 2. FINAL STAGE
FROM node:20.11.1-alpine

# Set the working directory
WORKDIR /usr/src/client

# Copy only the build output and .env vault file from the build stage
COPY --from=build /usr/src/client/build ./build
COPY --from=build /usr/src/client/.env.vault ./.env.vault

# Set Dotenv environment variable for runtime
ARG CLIENT_DOTENV_KEY
ENV DOTENV_KEY=$CLIENT_DOTENV_KEY

# Install runtime dependencies (if any are required)
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install --production --ignore-optional

EXPOSE 3000

CMD ["yarn", "start"]