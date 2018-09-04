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
        /*
        线段端点
        lineCap 定义上下文中线的端点，可以有以下 3 个值。
        butt：默认值，端点是垂直于线段边缘的平直边缘。
        round：端点是在线段边缘处以线宽为直径的半圆。
        square：端点是在选段边缘处以线宽为长、以一半线宽为宽的矩形。
        */
        testLineCap();
        /*
        线段连接
        lineJoin 定义两条线相交产生的拐角，可将其称为连接。在连接处创建一个填充三角形，可以使用 lineJoin 设置它的基本属性。
        miter：默认值，在连接处边缘延长相接。miterLimit 是角长和线宽所允许的最大比例(默认是 10)。
        bevel：连接处是一个对角线斜角。
        round：连接处是一个圆。
        */
        testLineJoin();
        /*填充渐变形状*/
        testLinearGradient();
        testRadialGradient();
        /*图像填充*/
        testImgCreatePattern();
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
    testLineCap=function(){
        myctx.beginPath();
        myctx.moveTo(580,70);
        myctx.lineTo(700,70);
        myctx.strokeStyle='#FFF0F5';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(580,10);
        myctx.lineTo(700,10);
        myctx.lineCap='butt';
        myctx.strokeStyle='#FFC0CB';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(580,30);
        myctx.lineTo(700,30);
        myctx.lineCap='round';
        myctx.strokeStyle='#FFB6C1';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(580,50);
        myctx.lineTo(700,50);
        myctx.lineCap='square';
        myctx.strokeStyle='#DC143C';
        myctx.lineWidth=10;
        myctx.stroke();
    },
    testLineJoin=function(){
        myctx.beginPath();
        myctx.moveTo(710,10);
        myctx.lineTo(810,100);
        myctx.lineTo(710,200);
        myctx.strokeStyle='#DB7093';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(730,10);
        myctx.lineTo(830,100);
        myctx.lineTo(730,200);
        myctx.lineJoin='miter';
        myctx.miterLimit=10;
        myctx.strokeStyle='#DB7093';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(750,10);
        myctx.lineTo(850,100);
        myctx.lineTo(750,200);
        myctx.lineJoin='bevel';
        myctx.miterLimit=10;
        myctx.strokeStyle='#DB7093';
        myctx.lineWidth=10;
        myctx.stroke();

        myctx.beginPath();
        myctx.moveTo(770,10);
        myctx.lineTo(870,100);
        myctx.lineTo(770,200);
        myctx.lineJoin='round';
        myctx.miterLimit=10;
        myctx.strokeStyle='#DB7093';
        myctx.lineWidth=10;
        myctx.stroke();
    },
    testLinearGradient=function(){
        myctx.beginPath();
        //添加渐变线
        var grd = myctx.createLinearGradient(900,200,1000,200);
        //添加颜色断点
        grd.addColorStop(0,"#C4C4C4");
        grd.addColorStop(0.5,"#BF3EFF");
        grd.addColorStop(1,"#B3EE3A");
        //应用渐变
        myctx.fillStyle = grd;
        myctx.strokeStyle = grd;
        myctx.lineWidth=5;
        myctx.fillRect(900,0,100,100);
        myctx.strokeRect(900,100,100,100);
    },
    testRadialGradient=function(){
        myctx.beginPath();
        //添加渐变线
        var grd = myctx.createRadialGradient(1200,100,50,1200,100,100);
        //添加颜色断点
        grd.addColorStop(0,"#C4C4C4");
        grd.addColorStop(0.5,"#BF3EFF");
        grd.addColorStop(1,"#B3EE3A");
        //应用渐变
        myctx.fillStyle = grd;
        myctx.lineWidth=5;
        myctx.fillRect(1100,0,200,200);
    },
    testImgCreatePattern=function(){
        var img = new Image();  //创建Image对象
        img.src = "/images/createPatternscreenshot.png";
        img.onload=function(){
            var pattern = myctx.createPattern(img,"repeat");
            myctx.fillStyle = pattern;
            myctx.fillRect(0,210,200,200);
        };
    },
    windowResize = function() {
        _w = _body.offsetWidth;
        _h = _body.offsetHeight;
        mycanvas.width = _w;
        mycanvas.height = _h;
    };
    init();
})(this);
