// 获取当前页面url
export const localUlr = window.location.href;

// 获取全部参数
export const getAllParam = (url = '') => {
  url = url || localUlr;
  const result = [];
  const query = url.split("?")[1];
  if (query) {
    const queryArr = query.split("&");
    queryArr.forEach(function(item){
      const obj = {};
      const value = item.split("=")[1];
      const key = item.split("=")[0];
      obj[key] = value;
      result.push(obj);
    });
  }
  return result;
}

// 获取指定参数
export const getParam = (name = '', url = '') => { 
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  const urlObj = url ? new URL(url) : window.location;
  const r = urlObj.search.substr(1).match(reg); 
  if (r != null) return unescape(r[2]); 
  return null; 
} 
