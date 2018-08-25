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
        /*用线条画一个矩形*/
        drawOneRectangleWithLine();
        fillOneRectangleWithLine();
        /*重复回形正方形*/
        drawBackRect();
    },
    drawOneLine=function(){
        myctx.beginPath();
        myctx.moveTo(10,2);
        myctx.lineTo(100,2);
        myctx.closePath();
        myctx.lineWidth = 4;
        myctx.strokeStyle = "#f00";
        myctx.stroke();
    },
    drawThreeLine=function(){
        myctx.beginPath();
        myctx.moveTo(10,10);
        myctx.lineTo(100,100);
        myctx.lineTo(10,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#f00";
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(50,10);
        myctx.lineTo(150,100);
        myctx.lineTo(50,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#ff0";
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(90,10);
        myctx.lineTo(190,100);
        myctx.lineTo(90,200);
        myctx.lineWidth = 3;
        myctx.strokeStyle = "#000";
        myctx.stroke();
    },
    drawOneRectangleWithLine=function(){
        myctx.beginPath();
        myctx.moveTo(220,10);
        myctx.lineTo(320,10);
        myctx.lineTo(320,100);
        myctx.lineTo(220,100);
        myctx.closePath();
        myctx.lineWidth=10;
        myctx.strokeStyle="#FF83FA";
        myctx.stroke();
    },
    fillOneRectangleWithLine=function(){
        myctx.beginPath();
        myctx.moveTo(220,110);
        myctx.lineTo(320,110);
        myctx.lineTo(320,200);
        myctx.lineTo(220,200);
        myctx.closePath();
        myctx.fillStyle="#FFD700";
        myctx.lineWidth=10;
        myctx.strokeStyle="#FFDAB9";
        myctx.fill();
        myctx.stroke();
    },
    drawBackRect=function(){
        for(var i=0;i<10;i++){
            myctx.beginPath();
            myctx.rect(450-i*10,100-i*10,2*i*10,2*i*10);
            myctx.lineWidth=10;
            if(i%2==0){
                myctx.strokeStyle="#FF1493";
            }else{
                myctx.strokeStyle="#FF6A6A";
            }
            myctx.stroke();
            myctx.closePath();
        }
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
