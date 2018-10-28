
let xhr = function (type, url, headers, content, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  for (let header of headers) {
    xhr.setRequestHeader(header.name, header.value);
  }
  xhr.send(content);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && callback) {
      callback(xhr.status, xhr.responseText);
    }
  }
}

export default xhr;