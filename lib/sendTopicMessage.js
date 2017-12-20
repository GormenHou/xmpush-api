var url = require('url'),
https = require('https'),
Constants = require('./constants'),
Message = require('./message'),
HttpsPost = require('./https_post');

module.exports = function(appSecret, message, callback) {
var parsedMessage = Message.parseTopicMessage(message);
if (parsedMessage.status == 1) {
    callback(parsedMessage, null, null);
} else {
    var postData = parsedMessage.message;
    HttpsPost(Constants.V3_BROADCAST, appSecret, postData, callback)
}

}