# test-ib

## Setup

* Clone the repository
* Install dependencies

```
cd test-ib
npm i
```

* Copy `.env`

```
cp .env.example .env
```

* Build

```
npm run build
```

## Load from flat file to DB

```
npm run load
```

**Note:** The flat file is in `./data/test.dat` by default. The path to the file is specified in `.env`.

## Schedule emails

```
npm run emails
```
