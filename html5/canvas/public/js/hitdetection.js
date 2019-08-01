"use strict";
function Ball(cxt,x,y,r,fcolor){
    cxt.beginPath();
    cxt.save();
    fcolor = fcolor || "#EE7AE9";
    cxt.arc(x,y,r,0,Math.PI*2,false);
    cxt.fillStyle=fcolor;
    cxt.fill();
    cxt.restore();
    cxt.closePath();
}
Ball.prototype={
    constructor:Ball
};
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
        /*外接图形判别法*/
        /*外接矩形判别法*/
        testBoundingRectangle();
    },
    testBoundingRectangle=function(){
        var bal=new Ball();
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
