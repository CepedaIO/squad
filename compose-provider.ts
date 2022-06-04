import {ComposeProvider} from "@vlegm/cli";

export default {
  version: "3.7",
  predefined: ["postgres", "redis", "pgadmin"],
  env: {
    POSTGRES_HOST: 'postgres',
    POSTGRES_PORT: '5432',
    POSTGRES_DB: 'event-matcher',
    POSTGRES_USER: 'superuser',
    POSTGRES_PASSWORD: 'password',
    PGADMIN_DEFAULT_EMAIL: 'superuser@local.com',
    PGADMIN_DEFAULT_PASSWORD: 'password',
    SERVER_PORT: 8080
  },
  services: {
    client: {
      repo: {
        url: "git@github.com:vlegm/event-matcher-client.git",
        init: "yarn install"
      },
      ports: [
        '3000:3000'
      ],
      command: [
        "yarn install",
        "yarn dev",
      ],
      image: "vlegm/dev-alpine:latest"
    },
    server: {
      repo: {
        url: "git@github.com:vlegm/event-matcher-cloud-functions.git",
        init: "yarn install"
      },
      ports: [
        "8080:8080"
      ],
      tty: true,
      mnts: ["expressman:@vlegm/expressman"],
      command: "yarn dev",
      image: "vlegm/dev-alpine:latest"
    },
    expressman: {
      repo: {
        url: "git@github.com:vlegm/expressman.git",
        init: "yarn install"
      }
    }
  }
} as ComposeProvider;
