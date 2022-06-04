import { DockerComposeConfig } from "@vlegm/cli";

export const config: DockerComposeConfig = {
  version: "3.7",
  services: {
    postgres: {
      env_file: '.env',
      ports: [
        '5432:5432'
      ],
      volumes: [
        'postgres:/var/lib/postgresql/data'
      ],
      image: 'postgres:11.6'
    },
    pgadmin: {
      env_file: '.env',
      ports: [
        '8085:80'
      ],
      volumes: [
        'pgadmin:/var/lib/pgadmin'
      ],
      image: 'dpage/pgadmin4'
    }
  },
  volumes: {
    postgres: {},
    pgadmin: {}
  }
};

export default config;