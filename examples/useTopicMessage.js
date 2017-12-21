

var SendTopicMessage = require('../lib/sendTopicMessage');

SendTopicMessage('your appSecret', {
    payload: 'hello workd',
    title: 'hello workd',
    description: 'hello workd',
    notifyType: 5,
    restrictedPackageNames: ['your apk name'],
    passThrough: 1, //0: 通知栏消息，1: 透传消息
    notifyId : -1,
    topic: 'world',
    topic_op: 'UNION', //UNION : 并集, A∪B∪C∪D, INTERSECTION : 交集, A ∩B ∩C∩D, EXCEPT : 差集, A-B-C-D;
    extra: {
        'notify_foreground': 1,
        'notify_effect': 2,
        'click_intent_uri': 'hahhahha'
    }
}, function(err, body, res) {
    console.log('err-> %j', err);
    console.log('body-> %j', body);
    console.log('res-> %j', res);
})