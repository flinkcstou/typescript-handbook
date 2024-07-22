- `-` its union

```ts

type stringBoolean = string | boolean
const s: stringBoolean = 'sdfsdf';
const a: stringBoolean = true;

```

- `&` its intersection

```ts
type Horse = {
  name: 'string'
}
type Animal = {
  voice: string
}
type HorseExtendAnimal = Horse & Animal

const horseEx: HorseExtendAnimal = {
  name: 'sdfsdf',
  voice: 'sdfsdfs'
};

```

```ts
type ObjectKeyType = keyof ObjectType;
type PropertyType = ObjectType[ObjectKeyType];
```

- `ObjectType` is the object that we want to access the properties of.
- `ObjectKeyType` is the type of key that we want to use to access the property.
- `PropertyType` is the type of property that we want to access.

- `keyof`

```ts
type Asd<K extends keyof T> = {}

function asd<T>(v: keyof T) {
}

type IEx<T> = {
  [K in keyof T]?: T[K];
}

```

    - `type T<K extends keyof T> = {}`
    - `value: keyof T`

- `Index types`

```ts

```

// TODO

В следующий раз, что я должен изучить

- assertions
- object is Object
- Optional Type

- Дальше изучить терминологию и дать каждому типу определение.
  То есть научиться строить предложения словами для построения типа
- Узнать каждый термин для каждого синтаксиса. Разобрать все возможные построения легких типов с помощью keyof, extends/
- Также разобрать построения одиночных и множественных типов и взаимоотношения между ними.
- Также создать базу знаний разных паттернов по разным видами типизации и их комбинации. "Assertion throw function,
  Conditional.
- В конце все это нормально продокументировать
- Также изучить Intersection и изучить паттерны где и как обычно пользуются
- 
