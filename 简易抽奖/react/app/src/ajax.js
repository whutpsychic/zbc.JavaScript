
//import loginToken from './loginToken.js';
//import jumper from './jumper.js';
import xhr from './xhr.js';
//import { message } from 'module';

let buildQueryParameter = data => {
  if (!data) return '';
  let s = '';
  for (let key in data) {
    s += s.indexOf('=') === -1 ? '' : '&';
    s += key;
    s += '=';
    s += encodeURIComponent(data[key]);
  }
  return s;
}

let lastTimeoutAlertTime = null;

//let onTimeout = () => {
//  let now = new Date();
//  if (!lastTimeoutAlertTime || now - lastTimeoutAlertTime > 5000) {
//    lastTimeoutAlertTime = now; 
//    alert('登录超时，请重新登录!');
//    loginToken.logout();
//    jumper.jump('/', true);
//  }
//}

const isFile = obj => {
  return Object.prototype.toString.call(obj) === '[object File]';
}

let ajax = function (option) { 
  let url = option.url;
  let optionType = option.type.toLowerCase();
  let data = option.data;
  let onSuccess = option.success;
  let onError = option.error;
  let contentType = 'application/json';
  let type = optionType;
  let headers = [];
  let content = {};


  switch (optionType) {
    case 'get':
      url += '?' + buildQueryParameter(data);
      break;
    case 'file':
      type = 'post';
      contentType = "multipart/form-data, boundary=AaB03x";
     
      content = new FormData();
      if (isFile(data)) {             
        content.append(data.name, data);
      } else {        
        for (let key in data) {   
          content.append(key, data[key]);
        }
      }
      break;
    default:
      content = JSON.stringify(data);
      break;
  }

  //let token = loginToken.getToken();
  if (contentType === 'application/json')
  headers.push({ name: 'Content-type', value: contentType });
  headers.push({ name: 'Accept', value: 'application/json' });
  //headers.push({ name: 'Authorization', value: 'Bearer ' + token });

  let callback = (status, responseText) => {
    switch (status) {
      case 202:
      case 405:
      case 417:
      case 500:
        console.error(responseText);
        try {
          let obj = JSON.parse(responseText);
          if (onError) {
            onError(obj);
          } else {
            if (obj.statusInfo) {              
              if (!url.match(/messagelist\/getmessage/)) {
                console.error(obj.statusInfo);
              }              
            } else {
              if (!url.match(/messagelist\/getmessage/)) {
                console.error('出现服务端错误，操作失败');
              }
            }
          }          
        } catch (e) {
          if (!url.match(/messagelist\/getmessage/)) {
            console.error('出现服务端错误，操作失败');
          }
        }
        return;
      case 404:
        return;
      case 402:
      case 403:
        //onTimeout();
        return;
      default:
        if (onSuccess) {
          onSuccess(JSON.parse(responseText), status);
        }
        return;
    }
  };

  xhr(type, url, headers, content, callback);
}



export default ajax;