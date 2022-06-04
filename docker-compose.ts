import { DockerComposeConfig } from "@vlegm/cli";

export const config: DockerComposeConfig = {
  version: "3.7",
  predefined: ['postgres', 'penis'],
  services: {
    postgres: {
      ports: [
        '5432:5432'
      ],
      volumes: [
        'postgres:/var/lib/postgresql/data'
      ],
      image: 'postgres:11.6'
    },
    pgadmin: {
      ports: [
        '8085:80'
      ],
      volumes: [
        'pgadmin:/var/lib/pgadmin'
      ],
      image: 'dpage/pgadmin4'
    },
    client: {
      github: 'vlegm/event-matcher-client'
    },
    server: {
      github: 'vlegm/event-matcher-cloud-functions'
    }
  },
  volumes: {
    postgres: {},
    pgadmin: {}
  }
};

export default config;