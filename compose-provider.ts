import {NodeJS, RepoSource, PGAdmin, Postgres} from "@cepedaio/cli";

export const server = NodeJS(8080)
  .include('src')
  .source('git@github.com:cepedaio/event-matcher-api.git')
  .npmLink('expressman')
  .command('yarn dev')

export const client = NodeJS(3000)
  .include('src')
  .source('git@github.com:cepedaio/event-matcher-client.git')
  .command('yarn dev')

export const expressman = RepoSource("git@github.com:cepedaio/expressman.git", [
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
