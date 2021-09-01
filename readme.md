# TKGM Lib

# Installing

```bash
npm install @yek-plus/tkgm
```

# Usage

```js
const tkgm = require("@yek-plus/tkgm");
tkgm()
  .get.arsa({
    mahalleNo: 56044,
    ada: 9880,
    parsel: 1,
  })
  .then(console.log);
```

# Options

| property | type       | required | default            | description            |
| -------- | ---------- | -------- | ------------------ | ---------------------- |
| fetch    | `function` | false    | node-fetch package | request fetch function |

# Methods

## get

### Il

### Usage

```js
tkgm().get.il();
```

#### Input

| property | type | required | default | description |
| -------- | ---- | -------- | ------- | ----------- |


#### Response

```js
[
  {
    text: String,
    id: Number,
  },
];
```

---

### Ilce

### Usage

```js
tkgm().get.ilce({ ilNo: 57 });
```

#### Input

| property | type     | required | default | description            |
| -------- | -------- | -------- | ------- | ---------------------- |
| ilNo     | `number` | true     | null    | İdari Yapı il Numarası |

#### Response

```js
[
  {
    text: String,
    id: Number,
  },
];
```

---

### Mahalle

### Usage

```js
tkgm().get.mahalle({ ilceNo: 56044 });
```

#### Input

| property | type     | required | default | description              |
| -------- | -------- | -------- | ------- | ------------------------ |
| ilceNo   | `number` | true     | null    | İdari Yapı ilce Numarası |

#### Response

```js
[
  {
    text: String,
    id: Number,
  },
];
```

---

### Arsa

### Usage

```js
tkgm().get.arsa({ mahalleNo: 56044, ada: 9880, parsel: 1 });
```

#### Input

| property  | type     | required | default | description                 |
| --------- | -------- | -------- | ------- | --------------------------- |
| mahalleNo | `number` | true     | null    | İdari Yapı mahalle Numarası |
| ada       | `number` | true     | null    | Arsa ada Numarası           |
| parsel    | `number` | true     | null    | Arsa parsel Numarası        |

#### Response

```js
const response = {
  type: String,
  geometry: {
    coordinates: [[[Number, Number]]],
    type: String,
  },
  properties: {
    ilceAd: String,
    mevkii: String,
    ilId: Number,
    durum: String,
    parselId: Number,
    zeminKmdurum: String,
    zeminId: Number,
    parselNo: String,
    nitelik: String,
    mahalleAd: String,
    gittigiParselListe: String,
    gittigiParselSebep: String,
    alan: String,
    adaNo: String,
    ilceId: Number,
    ilAd: String,
    mahalleId: Number,
    pafta: String,
  },
};
```

# Todo

- [ ] Write Tests
