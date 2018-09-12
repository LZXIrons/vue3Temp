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
        //clock1(150,150,100);
        wristwatch(cxt,200,200,100);
        electronicWatch(cxt,500,200);
    },
    electronicWatch=function(cxt,x,y){
        var dashWid=20;
        var drawWatch=function(){
            cxt.save();
            cxt.strokeRect(x,y,300,200);
            drawTime();
            cxt.restore();
        },
        drawTime=function(){
            var date=new Date(),
                hour=date.getHours(),
                minuete=date.getMinutes(),
                sec=date.getSeconds();
            hour = hour<10?'0'+hour:hour;
            minuete = minuete<10?'0'+minuete:minuete;
            sec = sec<10?'0'+sec:sec;
        };
        drawWatch();
        setInterval(drawWatch,1000);
    },
    wristwatch=function(cxt,x,y,r){
        var drawWatch=function(){
            cxt.save();
            cxt.clearRect(x-r-1,y-r-1,x+r+1,y+r+1);
            drawCircle();
            drawCenter();
            drawHands();
            drawNum();
            cxt.restore();
        },
        drawNum=function(){
            var numerals=[1,2,3,4,5,6,7,8,9,10,11,12],
                angle=0,
                numeralWidth=0;
            numerals.forEach(function(numeral){
                angle=Math.PI/6*(numeral-3);
                numeralWidth=cxt.measureText(numeral).width;
                cxt.fillText(numeral,x+Math.cos(angle)*(r-8) - numeralWidth/2,y+Math.sin(angle)*(r-8)+15/3);
            });
        },
        drawHands=function(){
            cxt.save();
            var date=new Date(),
                hour=date.getHours(),
                minuete=date.getMinutes();
            hour = hour>12?(hour-12):hour;
            drawHand(hour*5+minuete/60*5,.5,6);
            drawHand(minuete,.8,4);
            drawHand(date.getSeconds(),.9,2);
            cxt.restore();
        },
        drawHand=function(loc,percentage,wid){
            var angle=Math.PI*2*(loc/60)-Math.PI/2,
                handRadius=r*percentage,
                yu=handRadius*.1;
            wid=wid||4;
            cxt.beginPath();
            cxt.moveTo(x-Math.cos(angle)*15*percentage,y-Math.sin(angle)*15*percentage);
            cxt.lineTo(x+Math.cos(angle)*handRadius,y+Math.sin(angle)*handRadius);
            cxt.lineWidth=wid;
            cxt.closePath();
            cxt.stroke();
        },
        drawCenter=function(){
            cxt.beginPath();
            cxt.arc(x,y,5,0,Math.PI*2,false);
            cxt.closePath();
            cxt.fill();
        },
        drawCircle=function(){
            cxt.beginPath();
            cxt.arc(x,y,r,0,Math.PI*2,false);
            cxt.closePath();
            cxt.stroke();
        };
        drawWatch();
        setInterval(drawWatch,1000);
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
