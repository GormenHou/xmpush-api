

var SendAliasMessage = require('../lib/sendAliasMessage');

SendAliasMessage('your appSecret', {
    payload: 'hello workd',
    title: 'hello workd',
    description: 'hello workd',
    notifyType: 5,
    restrictedPackageNames: ['your apk name'],
    passThrough: 1, //0: 通知栏消息，1: 透传消息
    notifyId : 0,
    alias: 'wolrd',
    extra: {
        'notify_foreground': 1,
        'click_intent_uri': 'hahhahha'
    }
}, function(err, body, res) {
    console.log('err-> %j', err);
    console.log('body-> %j', body);
    console.log('res-> %j', res);
})