export interface Leg {
  left: string;
  right: string;
}

export interface Horse {
  name: string;
  id: string;
  field: string | number;
  ticket: number;
  leg: Leg;
}

export interface HiddenHorseFields {
  name: string,
  leg: Leg,
};

export enum HorseEnum {
  FLAG = 'flag',
  CHECK = 'check',
}

interface HorizontalPosition {
  left: number;
  right: number;
}

interface VerticalPosition {
  up: number;
  down: number;
}

interface TransportMode {
  walk: boolean,
  run: boolean
}


/*
* */
type Primitive = string | number | boolean

const data = ['text 1', 'text 2'] as const;
type Data = typeof data[number] // 'text 1' | 'text 2'

const locales = [
  {
    locale: 'se',
    language: 'Swedish',
  },
  {
    locale: 'en',
    language: 'English',
  }
] as const;
type Locale = typeof locales[number]['locale'] // type Locale = "se" | "en"

function someF(): Promise<string> {
  return new Promise(() => '');
}

type getFType = Awaited<ReturnType<typeof someF>> // string

/*
* */
type OnlyBoolsAndLeg = {
  /*  union type = `|` */
  [key: string]: boolean | Leg
}
const conforms: OnlyBoolsAndLeg = {
  'asdas': true,
  'afas': {
    right: 'sdf',
    left: 'sdfds'
  }
};

/*
* */
type TUnionType = keyof Horse //  'name' | 'id' | 'field' | 'ticket' | 'leg'

type TKeys<V> = keyof V

type KeysLeg = TKeys<Leg> // 'left' | 'right'

const tks: TKeys<Horse> = 'id' || 'leg' || 'field' || 'name' || 'ticket';

/*
* */
type TKey<V, Key extends keyof V> = Key;

type KeyLeg = TKey<Leg, 'left' | 'right'> // 'left' | 'right'

const tk: TKey<Horse, 'id' | 'field'> = 'id';

/*
* */
type TValues<V> = V[keyof V];

type ValuesHorse = TValues<Horse> // string | number | leg

const tvs: TValues<Horse> = 'adfsdf' || {left: 'sdf', right: 'sdfsd'} || 3;

/*
* */
type TValue<V, Key extends keyof V> = V[Key];

type ValueHorse = TValue<Horse, 'field'> // string | number

const tv: TValue<Horse, 'field'> = 3 || 'sdffsd';

/*
* */
type TValuesAsKeys<T extends any> = {
  [K in keyof T as T[K]]: number;
};
type TValuesAsKeysHorse = TValuesAsKeys<HorseEnum>

const tvask: TValuesAsKeys<typeof HorseEnum> = {
  [HorseEnum.CHECK]: 3,
  flag: 3
};

/*
* */
type TValuesAsString<T> = {
  [key: string]: [keyof T];
}
type TValuesAsStringLeg = TValuesAsString<Leg>

const tvasleg: TValuesAsString<Leg> = {
  dsfsdf: ['left']
};

function getProperty<V>(obj: V, key: keyof V): V[keyof V] {
  return obj[key];
}

function getPropertyEx<V, Key extends keyof V>(obj: V, key: Key): V[Key] {
  return obj[key];
}

type ReverseHorseEnum = {
  [K in keyof typeof HorseEnum as typeof HorseEnum[K]]: K
}


/*
* Template literal types
* */
type MovePosition = `${keyof TransportMode}: ${keyof VerticalPosition}-${keyof HorizontalPosition}`;

type TMovePosition = {
  [s in keyof TransportMode as `${s}: ${keyof VerticalPosition} : ${keyof HorizontalPosition}`]: keyof TransportMode
}

type TCustom = {
  [key in typeof HorseEnum.CHECK as `${key}${keyof typeof HorseEnum}`]: `${typeof HorseEnum[keyof typeof HorseEnum]}`
}

/*
* */
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, 'left'>]: Type[Property]
};
const removeKindField: RemoveKindField<Leg> = {
  right: 'sdfsd'
};

/*
* */
type CapitalizeKeys<T> = {
  [P in keyof T as `${Capitalize<string & P>}`]: T[P];
}

type TCapitalizeKeys = CapitalizeKeys<Horse>

type Getter<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P]
};

type PersonWithGetter = Getter<Horse>;

type AsyncGetter<T> = {
  [P in keyof T as `get${Capitalize<P & string>}}`]: () => Promise<T[P]>
}

function setProp<T, K extends keyof T>(obj: T, prop: K, value: T[K]) {
  obj[prop] = value;
}

type TEntityPropGetterMapper<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
};


/*
* разобраться с keyof
* */

type NumberKeys = keyof number; // "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"

type wrapObjectType<T> = {
  [K in keyof T]: {
    value: T[K];
    description: string;
  };
};
type wrapObjectTypeHorse = wrapObjectType<Horse>

type TEntityPropsMapper<T> = {
  [Property in keyof T]: {
    protectedField: boolean;
    description: string;
  };
};
type TEntityPropsMapperT<T extends keyof Horse> = {
  [Property in T]: {
    protectedField: Horse[T];
    description: string;
  };
};

type TT = TEntityPropsMapperT<keyof Pick<Horse, 'id' | 'field'>>


type Record<T, K extends keyof any> = {
  [P in K]: T
}
type TRecord = Record<Horse, keyof Horse>

type Partial<T> = {
  [K in keyof T]?: T[K]
}
type Readonly<T> = {
  readonly [K in keyof T]: T[K]
}
type Mutable<T> = {
  -readonly [K in keyof T]: T[K]
}
type Required<T> = {
  [K in keyof T]-?: T[K]
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type TPick = Pick<Horse, 'field'>


type Exclude<T, U> = T extends U ? never : T

const excludeValue: Exclude<Horse[keyof Horse], string> = 34;

type Extract<T, U> = T extends U ? T : never;

type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

type TOmit = Omit<Horse, keyof HiddenHorseFields>; // 'id' | 'field' | 'ticket'


type OverPick<T, K extends keyof T, S extends keyof any> = {
  [P in K]: T[P]
} & {
  [L in S]: L extends K ? T[L] : string
}

type OverPick2 = Pick<Horse, 'id'> & Record<string, 'solo'>

const overPick: OverPick<Horse, 'id', 'solo'> = {
  id: 'sdfsdf',
  solo: 'sdfsdfds'
};
const overPick2: OverPick2 = {
  solo: '3',
  id: 'fsdfds'
};

/*
* любой type может быть unionType, как объединение нескольких типов, принимать один из типов в любое время
* type Primitive = string | number | boolean
* keyof делает следующее: берет все ключи в Типе, в Объекте, в Interface и создает новый тип - 'String Literal Types' по наименованию ключей
* type TUnionType = keyof Leg; // 'left' | 'right' // its `String Literal Types`
* keyof это как 'UnionType' |
* extends это все что включает в Тип, который передаем
* всё что extends это массив типов либо по другому это unionType(unionType может быть и в единственном числе а может и в множественном)
* "K extends T" , "K extends keyof T", K это и есть массив типов либо это unionType
* выходит unionType | это массив типов в мире типизации
* Итог extends принимает UnionType, keyof делает из ключа Объекта UnionType
* а то что принимает через in - [Key in K] это одиночный тип, то есть раздробление UnionType на отдельные типы по циклу
* [Key in "x" | "y" | "z"]: number; => ['x']:number; ['y']:number; ['z']:number;
* T[keyof] это тип значения и она может быть UnionType; => interface SSS{id: number| string} => SSS['id'} // number| string
* */

