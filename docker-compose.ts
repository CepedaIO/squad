import { ComposeProvider } from "@vlegm/cli";

export const config: ComposeProvider = {
  predefined: ['postgres', 'pgadmin'],
  services: {
    client: 'git@github.com:vlegm/event-matcher-client',
    server: 'git@github.com:vlegm/event-matcher-cloud-functions'
  }
};

export default config;