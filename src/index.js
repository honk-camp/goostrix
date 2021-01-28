import sdk from 'matrix-js-sdk';
import config from '../config.js';

console.log(config, process.argv.slice(2));

const client = sdk.createClient({
  baseUrl: config.baseUrl,
  accessToken: process.argv[3],
  userId: process.argv[2]
});

console.log(client.getAccessToken());