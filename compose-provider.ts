import {NodeJS, RepoSource, PGAdmin, Postgres} from "@vlegm/cli";

export const server = NodeJS(8080)
  .include('src')
  .source('git@github.com:vlegm/event-matcher-cloud-functions.git')
  .npmLink('expressman');

export const client = NodeJS(3000)
  .source('git@github.com:vlegm/event-matcher-client.git');

export const expressman = RepoSource("git@github.com:vlegm/expressman.git", [
  'yarn install',
  'yarn build'
]);

export const postgres = Postgres({
  POSTGRES_PORT: 5432,
  POSTGRES_HOST: 'postgres',
  POSTGRES_DB: 'event-matcher',
  POSTGRES_USER: 'superuser',
  POSTGRES_PASSWORD: 'password',
})

export const pgadmin = PGAdmin({
  PGADMIN_PORT: 8081,
  PGADMIN_DEFAULT_EMAIL: 'superuser@local.com',
  PGADMIN_DEFAULT_PASSWORD: 'password',
})
