import {NodeJS, RepoSource, Postgres} from "@cepedaio/cli";

export const server = NodeJS([8080, 9229])
  .include('src')
  .source('git@github.com:CepedaIO/event-matcher-api.git')
  .npmLink('shared')
  .command('yarn dev:watch')

export const client = NodeJS(3000)
  .include('src')
  .source('git@github.com:CepedaIO/event-matcher-client.git')
  .npmLink('shared')
  .command('yarn dev')

export const shared = RepoSource("git@github.com:CepedaIO/event-matcher-shared.git", [
  'yarn install',
  'yarn build'
]);

export const postgres = Postgres({
  POSTGRES_PORT: 5432,
  POSTGRES_HOST: 'postgres',
  POSTGRES_DB: 'event-matcher',
  POSTGRES_USER: 'superuser',
  POSTGRES_PASSWORD: 'password',
});
