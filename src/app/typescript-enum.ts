export class TypescriptEnum {

}

enum EDirection {
  up = 'UP',
  down = 'DOWN',
  left = 'LEFT',
  right = 'RIGHT',
}


const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const ODirection2 = {
  up: 'UP',
  asdf(): 'DOWN' {
    return 'DOWN';
  },
  asdf2: () => 'sdfsdfsd'
} as const;


function walk(dir: EDirection) {
  dir === EDirection.down;
  dir === 'UP';
}

type TEDirectionValues = typeof EDirection[keyof typeof EDirection]

function walkValues(dir: TEDirectionValues) {
  const dir2: EDirection = EDirection.down;
  dir === EDirection.down;
  dir === dir2;
  dir === 'DOWN';
}

type TEDirectionKeys = keyof typeof EDirection

function walkKeys(dir: TEDirectionKeys) {
  dir === 'down';

}

type ValueOf<T> = T[keyof T];

type ReverseEnum = { [K in keyof typeof EDirection as typeof EDirection[K]]: K }

const sddd: ReverseEnum = {
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up'
};

type TODirection = typeof ODirection

function run(dir: TODirection) {
  dir === ODirection;
}

type TODirectionValues = typeof ODirection[keyof typeof ODirection]

function runValues(dir: TODirectionValues) {
  dir === 1;
  dir === 0;
  dir === 3;
}

type TODirectionKeys = keyof typeof ODirection

function runKeys(dir: TODirectionKeys) {
  dir === 'Down';
  dir === 'Up';
  dir === 'Left';
}

type TODirection2 = typeof ODirection2

function jump(dir: TODirection2) {
  dir === ODirection2;
  console.error(dir);
}

type TODirection2Values = typeof ODirection2[keyof typeof ODirection2]

function jumpValues(dir: TODirection2Values) {
  dir === 'UP';
}


