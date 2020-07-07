var crypto = require('crypto');
const FormData = require('form-data');
const request = require('request').defaults({jar: true})

; (async () => {
  
  request.get({
    url: "http://docker.hackthebox.eu:31673/"
}, function(error, response, body){
  const array = body.split('\n')
    const key = array[5].replace("<h1 align='center'>MD5 encrypt this string</h1><h3 align='center'>", '').replace("</h3><center><form action=\"\" method=\"post\">", '')

    const valorMD5 = crypto.createHash('md5').update(key).digest("hex");
    request.post({
        url:"http://docker.hackthebox.eu:31673/",
        form: {"hash": valorMD5},
        header: response.headers
    },function(error, response, body){
        // The full html of the authenticated page
        console.log(body);
    });
});



  





})()

