"use strict";
;(function(window) {
    var mycanvas = _.dom.qid('mycanvas'),
    cxt = mycanvas.getContext('2d'),
    _body = document.body,
    _w,
    //容器的宽度，也是canvas的宽度
    _h; //容器的高度，也是canvas的高度
    var init = function() {
        windowResize();
        _.dom.visualState(mycanvas,'visibility');
        window.addEventListener('resize', windowResize);
        testTranslate();
        testRotate();
        testScale();
        testTransform();
    },
    testTranslate=function(){
        cxt.save();
        cxt.beginPath();
        cxt.fillStyle="#EE00EE";
        cxt.translate(-100,-100);
        cxt.fillRect(100,100,200,200);
        cxt.restore();

        cxt.save();
        cxt.beginPath();
        cxt.fillStyle="#EE0000";
        cxt.translate(200,0);
        cxt.fillRect(0,0,100,200);
        cxt.restore();
    },
    testRotate=function(){
        cxt.beginPath();
        cxt.save();
        cxt.fillStyle="#CD6839";
        cxt.translate(350,50);
        cxt.rotate(.25*Math.PI);
        cxt.fillRect(0,0,50,50);
        cxt.restore();
        cxt.save();
        cxt.translate(350,50);
        cxt.rotate(.15*Math.PI);
        cxt.fillRect(0,0,50,50);
        cxt.restore();
        cxt.closePath();
    },
    testScale=function(){
        cxt.beginPath();
        cxt.save();
        cxt.strokeStyle="#B3EE3A";
        cxt.translate(400,50);
        cxt.scale(2,2);
        cxt.rect(0,0,50,50);
        cxt.stroke();
        cxt.restore();
        cxt.closePath();
    },
    testTransform=function(){
        cxt.beginPath();
        cxt.save();
        cxt.setTransform(1,0.1,-0.1,1,30,10);
        cxt.fillStyle="blue";
        cxt.fillRect(500,0,120,100);
        cxt.restore();
        cxt.closePath();
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
