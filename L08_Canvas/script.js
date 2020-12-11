"use strict";
var L08_Canvas;
(function (L08_Canvas) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let line = 0.5;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * line;
        drawBackground();
        drawSun({ x: 250, y: 100 });
        drawCloud({ x: 550, y: 100 }, { x: 175, y: 75 });
        drawMountains({ x: 0, y: horizon }, 50, 175, "darkgrey", "white");
        drawHouse();
        drawRoof();
        drawLift();
        drawTree();
        drawSkier({ x: 390, y: 360 }, { x: 20, y: 40 });
        drawSnow();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let radius1 = 15;
        let radius2 = 100;
        let gradientSun = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let cloudParticles = 20;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradientCloud = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;
        for (let drawn = 0; drawn < cloudParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 130;
        let x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y = -_min - Math.random() * (_max - _min);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradientMountain = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }
    function drawHouse() {
        console.log("House");
        crc2.save();
        crc2.fillStyle = "rgb(102, 51, 0)";
        crc2.fillRect(500, 250, 100, 100);
    }
    function drawRoof() {
        console.log("Roof");
        crc2.save();
        crc2.fillStyle = "rgb(51, 13, 0)";
        crc2.beginPath();
        crc2.moveTo(550, 200);
        crc2.lineTo(500, 250);
        crc2.lineTo(600, 250);
        crc2.fill();
    }
    function drawLift() {
        console.log("Lift");
        crc2.save();
        crc2.beginPath();
        crc2.moveTo(575, 275);
        crc2.lineTo(800, 450);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(525, 275);
        crc2.lineTo(800, 500);
        crc2.stroke();
    }
    function drawTree() {
        console.log("Tree");
        crc2.save();
        /*let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "green");*/
        crc2.fillStyle = "green";
        crc2.beginPath();
        crc2.moveTo(700, 225);
        crc2.lineTo(675, 300);
        crc2.lineTo(725, 300);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(750, 250);
        crc2.lineTo(725, 350);
        crc2.lineTo(775, 350);
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(150, 350);
        crc2.lineTo(100, 550);
        crc2.lineTo(200, 550);
        crc2.fill();
    }
    function drawSkier(_position, _size) {
        console.log("Skier");
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * 800;
            let y = Math.random() * 300;
            let color = ["blue", "red", "yellow", "orange", "purple"];
            let colorMix = color[Math.floor(Math.random() * color.length)];
            crc2.save();
            crc2.translate(x, y);
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(90, 385);
            crc2.lineTo(120, 420);
            crc2.stroke();
            crc2.lineWidth = 4;
            crc2.beginPath();
            crc2.moveTo(80, 380);
            crc2.lineTo(110, 415);
            crc2.stroke();
            crc2.beginPath();
            crc2.arc(100, 350, 8, 0, 2 * Math.PI);
            crc2.fillStyle = colorMix;
            crc2.fill();
            crc2.fillStyle = colorMix;
            crc2.fillRect(90, 360, 20, 40);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawSnow() {
        console.log("Snowflakes");
        for (let i = 0; i < 250; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
})(L08_Canvas || (L08_Canvas = {}));
//# sourceMappingURL=script.js.map