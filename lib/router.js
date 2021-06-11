/**
 * Created by Administrator on 2015/3/20.
 */
/**
 * Created by Administrator on 2015/3/18.
 */
var express = require('express');
var router = express.Router();
var wechat = require('wechat');

var wechatConfig = {
    token: 'huangshan200x',
    appid: 'wx472d3cba75c4f059',
    encodingAESKey: 'zm8Rw5OtiuQOrA4VByqpGHkC5ZiJV3RKwiY50YY2T67'
};

router.use('/public', express.static('public'));

router.use('/wechat', wechat(wechatConfig, function(req, res){
    var replyStr = '';
    console.log(message.MsgType+':'+message.EventKey)
    switch (message.MsgType){
        case 'event':
            if(message.Event == 'CLICK'){
                switch(message.EventKey){
                    case 'activity':
                        replyStr = '/:rose/:rose精彩活动模块开发中，敬请期待...';
                        break;
                    case 'course':
                        replyStr = '/:rose/:rose课程安排模块开发中，敬请期待...';
                        break;
                    case 'about':
                        replyStr = '/:rose/:rose关于我们模块开发中，敬请期待...';
                        break;
                }
            }
            console.log(replyStr);
            res.send(replyStr);
            break;
    }
}));

router.use('/', function (req, res) {
    res.send('Welcome to ');
});

module.exports = router;