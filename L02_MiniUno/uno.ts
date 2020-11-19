window.addEventListener("load", function () {
document.querySelector("#ziehstapel")?.addEventListener("click", createCard);
document.querySelector("#ziehstapel")?.addEventListener("click", draw);
document.querySelector("#ablagestapel")?.addEventListener("click", createFirstCard);
});

let color: string[] = ["blue", "red", "yellow", "green"];
let digit: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



/* let kartenfarbe: string[] = color.sort(function () {                //kartenfarbe wählt zufällige Farbe aus color: string[] -> Mit Befehl .sort(function () { return .5 - Math.random();})  (https://stackoverflow.com/a/18650169)
        return .5 - Math.random();
    });

let kartennummer: number[] = digit.sort(function () {                //kartenfarbe wählt zufällige Farbe aus color: string[] -> Mit Befehl .sort(function () { return .5 - Math.random();})  (https://stackoverflow.com/a/18650169)
        return .5 - Math.random();
});

interface Karte {
    farbe: string;
    nummer: number;
}

let neuekarte: Karte = {
    farbe: kartenfarbe[0],
    nummer: kartennummer[0]
}; */


function createCard (): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    div.innerText = "" + digit[Math.floor(Math.random() * 10)];     //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor         
    div.style.backgroundColor = color[Math.floor(Math.random() * 4)];
    div.style.fontSize = "200%";
    div.style.width = "150px"; 
    div.style.height = "225px";
    div.style.marginLeft = "30px";
    div.style.marginTop = "2%";
    div.style.position = "relative";
    div.style.float = "right";
}    


function createFirstCard (karte: string[]): void {
    let div: HTMLDivElement = document.createElement("div");
    document.body.appendChild(div);
    div.innerText = "" + digit[Math.floor(Math.random() * 10)];     //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/floor         
    div.style.backgroundColor = color[Math.floor(Math.random() * 4)];
    div.setAttribute("color",color[Math.floor(Math.random() * 4)]) ;
    div.style.fontSize = "200%";
    div.style.width = "300px";
    div.style.height = "225px";
    div.style.marginLeft = "30px";
    div.style.marginTop = "-19.8%";
    div.style.position = "static";
    switch (digit) {
        case 0:
        digit = 0;

        break;
    
        default:
            break;
    }
    
}
/* 
let turnPc: boolean = false;
let turnPlayer:boolean = true; */


function draw (): void {
   createCard;
   let button: HTMLButtonElement = document.createElement("button");
   document.body.appendChild(button);
   button.style.backgroundColor = color[Math.floor(Math.random() * 4)];
   button.style.fontSize = "200%";
   button.style.width = "50px";
   button.style.height = "50px";
   button.style.backgroundColor = "purple";
   button.style.position = "fixed";
   button.style.float = "right";
   
      
}