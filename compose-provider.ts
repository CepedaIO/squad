import {NodeJS, RepoSource, Postgres} from "@cepedaio/cli";

export const api = NodeJS([8100, 9229])
  .include('src')
  .source('git@github.com:CepedaIO/squad-api.git')
  .npmLink('shared')
  .command('yarn watch')

export const client = NodeJS(3100)
  .include('src')
  .source('git@github.com:CepedaIO/squad-client.git')
  .npmLink('shared')
  .command('yarn dev')

export const shared = RepoSource("git@github.com:CepedaIO/squad-shared.git", [
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
