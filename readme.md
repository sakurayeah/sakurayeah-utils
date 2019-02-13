### how to use

#### install
```
$ npm i sakurayeah-utils
```

#### usage
```js
import { localUlr, getAllParam, getParam } from 'sakurayeah-utils';

console.log('localUlr', localUlr)

const url = 'http://www.w3school.com.cn/tiy/t.asp?f=js_datatypes_string'
console.log('getAllParam', getAllParam(url))
console.log('getParam', getParam('f', url))
```


### to run example
```
$ git clone git@github.com:sakurayeah/sakurayeah-utils.git
$ npm i
$ npm run dev
```
open http://localhost:8080/base.html in your brower

