import { localUlr, getAllParam, getParam } from '../src/index';

// 当前页面
console.log('localUlr', localUlr)
console.log('getAllParam', getAllParam())
console.log('getParam', getParam('f'))

// 指定 url
const url = 'http://www.w3school.com.cn/tiy/t.asp?f=js_datatypes_string'
console.log('getAllParam', getAllParam(url))
console.log('getParam', getParam('f', url))