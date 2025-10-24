# Use the official Apify SDK image as base
FROM apify/actor-node:18

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm --quiet set progress=false \
    && npm install --only=prod --no-optional \
    && echo "Installed NPM packages:" \
    && (npm list --only=prod --no-optional --all || true) \
    && echo "Node.js version:" \
    && node --version \
    && echo "NPM version:" \
    && npm --version

# Copy source files
COPY . ./

# Run the actor
CMD npm start
