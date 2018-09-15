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
        drawFunc();
    },
    drawFunc=function(){
        wristwatch(cxt,200,200,100);
        electronicWatch(cxt,500,100);
    },
    electronicWatch=function(cxt,x,y){
        var dashWid=2,
            dashLen=20;
        var numimg=new Image();
        var drawWatch=function(){
            cxt.save();
            cxt.fillRect(x,y,480,110);
            drawTime();
            cxt.restore();
        },
        drawTime=function(){
            var date=new Date(),
                hour=date.getHours(),
                minuete=date.getMinutes(),
                sec=date.getSeconds();
            hour = hour<10?'0'+hour:hour+"";
            minuete = minuete<10?'0'+minuete:minuete+"";
            sec = sec<10?'0'+sec:sec+"";
            drawNumber(cxt,hour,x,y);
            drawColo(cxt,x+148,y+40);
            drawNumber(cxt,minuete,x+160,y);
            drawColo(cxt,x+308,y+40);
            drawNumber(cxt,sec,x+322,y);
        },
        drawColo=function(cxt,x,y){
            cxt.save();
            cxt.beginPath();
            cxt.fillStyle="#fff";
            cxt.arc(x,y,5,0,Math.PI*2,false);
            cxt.fill();
            cxt.arc(x,y+20,5,0,Math.PI*2,false);
            cxt.fill();
            cxt.closePath();
            cxt.restore();
        },
        drawNumber=function(cxt,num,x,y){
            for(var i=0,len=num.length;i<len;i++){
                switch(num[i]){
                    case '0':
                        cxt.drawImage(numimg,25,17,66,108,x+i*66,y,66,108);
                    break;
                    case '1':
                        cxt.drawImage(numimg,114,17,18,108,x+25+i*66,y,20,108);
                    break;
                    case '2':
                        cxt.drawImage(numimg,160,17,66,108,x+i*66,y,66,108);
                    break;
                    case '3':
                        cxt.drawImage(numimg,245,17,66,108,x+i*66,y,66,108);
                    break;
                    case '4':
                        cxt.drawImage(numimg,338,17,66,108,x+i*66,y,66,108);
                    break;
                    case '5':
                        cxt.drawImage(numimg,439,17,66,108,x+i*66,y,66,108);
                    break;
                    case '6':
                        cxt.drawImage(numimg,160,169,66,108,x+i*66,y,66,108);
                    break;
                    case '7':
                        cxt.drawImage(numimg,246,169,66,108,x+i*66,y,66,108);
                    break;
                    case '8':
                        cxt.drawImage(numimg,338,169,66,108,x+i*66,y,66,108);
                    break;
                    case '9':
                        cxt.drawImage(numimg,439,169,66,108,x+i*66,y,66,108);
                    break;
                }
            }
        };
        numimg.addEventListener('load',function(){
            drawWatch();
            setInterval(drawWatch,1000);
        });
        numimg.src='/images/clocknum.jpg';
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
        drawFunc();
    };
    init();
})(this);
