

function _fetch(url = '', params) {
  let myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  // myHeaders.append('Access-Control-Allow-Origin', '*');
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
  let myInit = { method: 'POST',
                 headers: myHeaders,
                 body: JSON.stringify(params),
                 mode: 'cors',
                 cache: 'default'
               };
  var myRequest = new Request(url, myInit);
  return new Promise((resolve, reject) => {
    fetch(myRequest)
     .then(res => {
       return res.json();
     })
     .then(json => {
        resolve(json)
     })
     .catch(err => {
       reject(err)
     })
  })
}

export default _fetch;