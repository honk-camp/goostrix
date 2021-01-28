console.clear();
// process.stderr.write('\x1B[?25l'); // Hide cursor

//const toolbarColor = [100, 100, 100];

import terminalKit from 'terminal-kit';
const term = terminalKit.terminal;

const expectedLogging = [
  'Getting saved sync token...',
  'Getting push rules...',
  'Got saved sync token',
  'Getting saved sync...',
  'Got reply from saved sync, exists? false',
  'Got push rules',
  'Checking lazy load status...',
  'Checking whether lazy loading has changed in store...',
  'Storing client options...',
  'Stored client options',
  'Getting filter...',
  'Sending first sync request...',
  'Waiting for saved sync before starting sync processing...'
];

let lastProgressItem;
console.log = (arg) => { // https://github.com/matrix-org/matrix-js-sdk/issues/516 - this is horrible but the only way to override the sdk's logging
  if (arg === 'Synced') {
    progressBar.stop();

    term.moveTo(3, term.height);
    term.bold('Synced' + ' '.repeat(term.width - 10))

    return;
  }

  if (lastProgressItem) progressBar.itemDone(lastProgressItem);

  progressBar.startItem(arg);
  lastProgressItem = arg;
};

term.moveTo(3, term.height);
const progressBar = term.progressBar({
  title: 'Syncing',
  items: expectedLogging.length,

  x: 3,
  y: term.height,
  width: term.width - 4
});

import './input.js';
import * as window from './window.js';

const gap = 1;

const menubarWidth = 40 + 1;
window.draw([gap * 2, gap], menubarWidth, term.height - gap * 2 - 1, 'Rooms');

window.draw([gap * 2 + menubarWidth + gap * 2, gap], (term.width - menubarWidth - gap * 2) - gap * 4, term.height - gap * 2 - 1, 'Cool Room Name');

setTimeout(() => {
  console.clear();
  process.exit();
}, 10000);

export const drawRooms = (rooms) => {
  // console.log(rooms.map((x) => x.name));

  term.moveTo(0, gap * 2 + 2);

  // let y = gap * 2 + 2;
  for (const r of rooms) {
    term.wrapColumn( { x: gap * 2 + 3, width: menubarWidth - 3 } ) ;
    term.wrap(r.name);
    term('\n\n');

    // y += 2;
  }
};