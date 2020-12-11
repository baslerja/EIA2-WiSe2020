namespace L08_Canvas {
    interface Vector {
        x: number;
        y: number;
    }

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let line: number = 0.5;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        let horizon: number = crc2.canvas.height * line;

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

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(line, "white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun", _position);

        let radius1: number = 15;
        let radius2: number = 100;
        let gradientSun: CanvasGradient = crc2.createRadialGradient(0, 0, radius1, 0, 0, radius2);

        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 50%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, radius2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore();
    }

    function drawCloud(_position: Vector, _size: Vector): void {
        console.log("Cloud", _position, _size);

        let cloudParticles: number = 20;
        let radiusParticle: number = 50;
        let particle: Path2D = new Path2D();
        let gradientCloud: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradientCloud.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradientCloud.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradientCloud;

        for (let drawn: number = 0; drawn < cloudParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log("Mountains");
        let stepMin: number = 50;
        let stepMax: number = 130;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            let y: number = -_min - Math.random() * (_max - _min);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradientMountain: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradientMountain.addColorStop(0, _colorLow);
        gradientMountain.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradientMountain;
        crc2.fill();
        crc2.restore();
    }

    function drawHouse(): void {
        console.log("House");

        crc2.save();
        crc2.fillStyle = "rgb(102, 51, 0)";
        crc2.fillRect(500, 250, 100, 100);
    }

    function drawRoof(): void {
        console.log("Roof");

        crc2.save();
        crc2.fillStyle = "rgb(51, 13, 0)";

        crc2.beginPath();
        crc2.moveTo(550, 200);
        crc2.lineTo(500, 250);
        crc2.lineTo(600, 250);
        crc2.fill();
    }

    function drawLift(): void {
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

    function drawTree(): void {
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

    function drawSkier(_position: Vector, _size: Vector): void {
        console.log("Skier");

        for (let i: number = 0; i < 12; i++) {
            let x: number = Math.random() * 800;
            let y: number = Math.random() * 300;
            let color: string[] = ["blue", "red", "yellow", "orange", "purple"];
            let colorMix: string = color[Math.floor(Math.random() * color.length)];

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

    function drawSnow(): void {
        console.log("Snowflakes");

        for (let i: number = 0; i < 250; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;

            crc2.save();
            crc2.beginPath();
            crc2.arc(x, y, 2, 0, 2 * Math.PI);
            crc2.fillStyle = "white";
            crc2.fill();
        }
    }
}