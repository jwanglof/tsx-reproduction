# tsx-reproduction

This repository is a reproduction of a bug in `tsx`.

## Steps to reproduce

1. Run `npm install && npm run start`
2. See error in terminal

It works if you change `tsx` version to `4.11.2` in `package.json`.

```json
{
  "dependencies": {
    "tsx": "4.11.2"
  }
}
```