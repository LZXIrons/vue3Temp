"use strict";
;(function(window) {
    let mycanvas = _.dom.qid('mycanvas'),
        cxt = mycanvas.getContext('2d'),
        _body = document.body,
        _w,//容器的宽度，也是canvas的宽度
        _h; //容器的高度，也是canvas的高度
    let init = function() {
        windowResize();
        _.dom.visualState(mycanvas,'visibility');
        window.addEventListener('resize', windowResize);
        drawFunc();
    },
    drawFunc=function(){
        cxt.fillStyle='#f0f';
        cxt.font="normal normal bold 30px/100px arial";
        cxt.fillText('Hello World!',100,100);
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
        drawFunc();
    };
    init();
})(this);
