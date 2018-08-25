"use strict";
;(function(window) {
    var mycanvas = _.dom.qid('mycanvas'),
    myctx = mycanvas.getContext('2d'),
    _body = document.body,
    _w,
    //容器的宽度，也是canvas的宽度
    _h; //容器的高度，也是canvas的高度
    var init = function() {
        windowResize();
        _.dom.visualState(mycanvas,'visibility');
        window.addEventListener('resize', windowResize);
        /*画一条线*/
        drawOneLine();
    },
    drawOneLine=function(){
        myctx.moveTo(10,10);
        myctx.lineTo(100,10);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#f00";
        myctx.stroke();
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
