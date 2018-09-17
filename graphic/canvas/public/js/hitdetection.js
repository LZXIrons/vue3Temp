"use strict";
;(function(window) {
    var mycanvas = _.dom.qid('mycanvas'),
    cxt = mycanvas.getContext('2d'),
    _body = document.body,
    _w,//容器的宽度，也是canvas的宽度
    _h; //容器的高度，也是canvas的高度
    var init = function() {
        windowResize();
        _.dom.visualState(mycanvas,'visibility');
        window.addEventListener('resize', windowResize);
        testFPS();
    },
    drawFunc=function(){
        testFPS();
    },
    testFPS=function(){
        var lastTime=(+new Date);
        var drawFPScalc=function(){
            var fps=parseInt(calculateFPS());
            requestAnimationFrame(drawFPScalc);
            cxt.clearRect(0,0,100,100);
            cxt.fillStyle='#FFA500';
            cxt.textAlign='left';
            cxt.fillText(fps+' FPS',20,20);
        },
        calculateFPS=function(){
            var now=(+new Date),
                fps=1000/(now - lastTime);
            lastTime=now;
            return fps;
        };
        requestAnimationFrame(drawFPScalc);
    },
    testRAF=function(){
        cxt.beginPath();
        cxt.moveTo(x,y);
        cxt.lineTo(x+10,y+10);
        cxt.stroke();
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
