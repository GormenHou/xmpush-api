var url = require('url'),
    https = require('https');

module.exports = function(pushAPI, appSecret, postData, callback) {
    var post_option = url.parse(pushAPI);
    post_option.method = 'POST';
    post_option.port = 443;
    post_option.headers = {
     'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8',
     'Content-Length' : postData.length,
     'Authorization': 'key=' + appSecret
    };
    var post_req = https.request(post_option, function(res){
    
        res.on('data', function(buffer){
            callback(null, buffer.toString(), res);
        });
    });
    post_req.on('error', (e) => {
        callback(e, null, null);
    });
    post_req.write(postData);
    post_req.end();
}