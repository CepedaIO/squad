import {NodeJSService, NodeJSSource, PGAdminService, PostgresService} from "@vlegm/cli";

export const server = new NodeJSService(8080);
server.addSource("git@github.com:vlegm/event-matcher-server.git", "yarn install");

export const client = new NodeJSService(3000);
client.addSource("git@github.com:vlegm/event-matcher-client.git", "yarn install");

export const expressman = new NodeJSSource("git@github.com:vlegm/expressman.git");

export const postgres = new PostgresService({
  POSTGRES_HOST: 'postgres',
  POSTGRES_PORT: 5432,
  POSTGRES_DB: 'event-matcher',
  POSTGRES_USER: 'superuser',
  POSTGRES_PASSWORD: 'password',
}, {
  port: 5432
})

export const pgadmin = new PGAdminService({
  PGADMIN_DEFAULT_EMAIL: 'superuser@local.com',
  PGADMIN_DEFAULT_PASSWORD: 'password',
}, {
  port: 8081
})
