import sdk from 'matrix-js-sdk';
import terminalKit from 'terminal-kit';

import config from '../config.js';

console.log(config, process.argv.slice(2));

const client = sdk.createClient({
  baseUrl: config.baseUrl,
  accessToken: process.argv[3],
  userId: process.argv[2]
});

if (!client.getAccessToken()) {
  console.error('Invalid access token / user ID provided');
  process.exit(-1);
}

// client.startClient();