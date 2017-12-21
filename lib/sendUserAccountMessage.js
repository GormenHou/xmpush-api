var url = require('url'),
https = require('https'),
Constants = require('./constants'),
Message = require('./message'),
HttpsPost = require('./https_post');

module.exports = function(appSecret, message, callback) {
var parsedMessage = Message.parseUserAccountMessage(message);
if (parsedMessage.status == 1) {
    callback(parsedMessage, null, null);
} else {
    var postData = parsedMessage.message;
    console.log('postData-> %j', postData);
    HttpsPost(Constants.V2_USERACCOUNT_MESSAGE, appSecret, postData, callback)
}

}