## run mongo in powershell

```
mongod --dbpath=/Users/sisac/mongodb-data
```

## generates a good JWT SECRET in nodejs

```
console.log(require('crypto').randomBytes(256).toString('base64'));
```
