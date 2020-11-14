"use strict";
var L05_Hexenkessel_Client;
(function (L05_Hexenkessel_Client) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        L05_Hexenkessel_Client.generateContent(L05_Hexenkessel_Client.data);
        let addInfo = document.querySelector("button#addInfo");
        let addIngredients = document.querySelector("button#addIngredients");
        let addPrep = document.querySelector("button#addPrep");
        let addStir = document.querySelector("button#addStir");
        addInfo.addEventListener("click", displayInfo);
        addIngredients.addEventListener("click", displayIngredients);
        addPrep.addEventListener("click", displayPrep);
        addStir.addEventListener("click", displayStir);
    }
    function displayInfo(_event) {
        let showInfo = document.querySelector("div#showInfo");
        showInfo.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "potion":
                    if (entry[1] != "") {
                        showInfo.innerHTML += "Name: " + entry[1] + "<br>" + "<br>";
                    }
                    break;
                case "descript":
                    if (entry[1] != "") {
                        showInfo.innerHTML += "Description: " + entry[1] + "<br>" + "<br>";
                    }
                    break;
                case "effect":
                    if (entry[1] != "Empty") {
                        showInfo.innerHTML += "Effect: " + entry[1] + "<br>";
                    }
                    break;
                case "timeEffect":
                    if (Number(entry[1]) != 0) {
                        showInfo.innerHTML += "Lasts up to " + entry[1] + " minutes" + "<br>" + "<br>";
                    }
                    break;
            }
        }
    }
    function displayIngredients(_event) {
        let showIngredients = document.querySelector("div#showIngredients");
        let formData = new FormData(document.forms[1]);
        let total = 0;
        for (let entry of formData) {
            if (entry[0] == "Ingredients") {
                let selector = "[value='" + entry[1] + "']";
                let item = document.querySelector(selector);
                let chosenAmount = "x" + entry[1];
                let amount = Number(formData.get("chosenAmount"));
                let priceItem = Number(item.getAttribute("price"));
                total = amount * priceItem;
                showIngredients.innerHTML += amount + " " + entry[1] + "<br>";
            }
        }
    }
    function displayPrep(_event) {
        let heat = document.querySelector("#hot");
        let cool = document.querySelector("#cold");
        let showPrep = document.querySelector("div#showPrep");
        let formData = new FormData(document.forms[1]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "temperature":
                    if (entry[1] != "") {
                        showPrep.innerHTML += "<br>" + "Temperature: " + entry[1] + "<br>";
                    }
                    break;
                case "degrees":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        showPrep.innerHTML += "Heat up/cool down to " + entry[1] + " degrees" + "<br>";
                    }
                    break;
                case "tempTime":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        showPrep.innerHTML += "For " + entry[1] + " seconds" + "<br>";
                    }
                    break;
                case "consistencyTemp":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        showPrep.innerHTML += "Until consistency is " + entry[1] + "<br>";
                    }
                    break;
                case "colorTemp":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        showPrep.innerHTML += "Until color looks like this " + entry[1] + "<br>" + "<br>";
                    }
                    break;
            }
        }
    }
    function displayStir(_event) {
        let slow = document.querySelector("#slow");
        let fast = document.querySelector("#fast");
        let showPrep = document.querySelector("div#showPrep");
        let formData = new FormData(document.forms[1]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "stir":
                    if (entry[1] != "") {
                        showPrep.innerHTML += "<br>" + "Stir level: " + entry[1] + "<br>";
                    }
                    break;
                case "stirTime":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        showPrep.innerHTML += "Stir for " + entry[1] + " seconds" + "<br>";
                    }
                    break;
                case "consistencyStir":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        showPrep.innerHTML += "Until consistency is " + entry[1] + "<br>";
                    }
                    break;
                case "colorStir":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        showPrep.innerHTML += "Until color looks like this " + entry[1] + "<br>" + "<br>";
                    }
                    break;
            }
        }
    }
    function coins(_price) {
        let knut;
        let sickel;
        let galleonen;
        let coins;
        if (_price < 29) {
            coins = _price.toString() + " Knut";
        }
        else if (_price < 493) {
            sickel = _price / 29;
            knut = _price % 29;
            coins = sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";
        }
        else {
            galleonen = _price / 493;
            _price %= 493;
            sickel = _price / 29;
            knut = _price % 29;
            coins = galleonen.toFixed(0) + " Galleonen" + sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";
        }
        return coins;
    }
})(L05_Hexenkessel_Client || (L05_Hexenkessel_Client = {}));
//# sourceMappingURL=script.js.map