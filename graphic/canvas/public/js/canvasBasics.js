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
        /*画三到折线*/
        drawThreeLine();
    },
    drawOneLine=function(){
        myctx.beginPath();
        myctx.moveTo(10,2);
        myctx.lineTo(100,2);
        myctx.lineWidth = 4;
        myctx.strokeStyle = "#f00";
        myctx.stroke();
        myctx.closePath();
    },
    drawThreeLine=function(){
        myctx.beginPath();
        myctx.moveTo(10,10);
        myctx.lineTo(100,100);
        myctx.lineTo(10,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#f00";
        myctx.stroke();
        myctx.closePath();

        myctx.beginPath();
        myctx.moveTo(50,10);
        myctx.lineTo(150,100);
        myctx.lineTo(50,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#ff0";
        myctx.stroke();
        myctx.closePath();

        myctx.beginPath();
        myctx.moveTo(90,10);
        myctx.lineTo(190,100);
        myctx.lineTo(90,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#000";
        myctx.stroke();
        myctx.closePath();
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
