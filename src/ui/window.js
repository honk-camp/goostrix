import terminalKit from 'terminal-kit';
const term = terminalKit.terminal;

export const defaultSet = 'rounded';

const charSets = {
  rounded: {
    corners: {
      top: {
        left: '╭',
        right: '╮'
      },

      bottom: {
        left: '╰',
        right: '╯'
      }
    },

    straight: {
      vertical: '│',
      horizontal: '─'
    }
  }
};

let charSet = charSets[defaultSet];

export const setCharSet = (name) => {
  charSet = charSets[name];
};

export const draw = (position, width, height, title) => {
  term.moveTo(position[0] + 1, position[1] + 1);

  const topSpacing = charSet.straight.horizontal.repeat(((width - title.length) / 2 - 1));

  process.stdout.write(`${charSet.corners.top.left}${topSpacing}${title}${topSpacing}${charSet.corners.top.right}`);

  for (let y = position[1] + 1; y < position[1] + height - 1; y++) {
    term.moveTo(position[0] + 1, y + 1);
    //process.stdout.write(charSet.straight.vertical);
    process.stdout.write(charSet.straight.vertical + ' '.repeat(width - 2) + charSet.straight.vertical);

    //term.moveTo(position[0] + 1 + width - 1, y + 1);
    //process.stdout.write(charSet.straight.vertical);
  }

  term.moveTo(position[0] + 1, position[1] + height);
  process.stdout.write(`${charSet.corners.bottom.left}${charSet.straight.horizontal.repeat(width - 2)}${charSet.corners.bottom.right}`);
};