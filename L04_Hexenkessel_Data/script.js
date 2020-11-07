"use strict";
var L03_Hexenkessel;
(function (L03_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        generateContent(data);
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        /*let fluxweed: HTMLDivElement = <HTMLDivElement>document.querySelector("#fluxweed");
        let boomslang: HTMLDivElement = <HTMLDivElement>document.querySelector("#boomslang");
        let knotgrass: HTMLDivElement = <HTMLDivElement>document.querySelector("#knotgrass");*/
        let heat = document.querySelector("#hot");
        let cool = document.querySelector("#cold");
        let slow = document.querySelector("#slow");
        let fast = document.querySelector("#fast");
        let recipe = document.querySelector("#display");
        recipe.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "potion":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Name: " + entry[1] + "<br>" + "<br>";
                    }
                    break;
                case "descript":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Description: " + entry[1] + "<br>" + "<br>";
                    }
                    break;
                case "effect":
                    if (entry[1] != "Empty") {
                        recipe.innerHTML += "Effect: " + entry[1] + "<br>";
                    }
                    break;
                case "timeEffect":
                    if (Number(entry[1]) != 0) {
                        recipe.innerHTML += "Lasts up to " + entry[1] + " minutes" + "<br>" + "<br>";
                    }
                    break;
                /*case "Ingredients":
                if (entry[1] != "") {
                    recipe.innerHTML += "Ingredient: " + entry[1] + "<br>";
                }
                break;

            /*case "Amount Fluxweed":
                if (entry[1] != "" && fluxweed.checked) {
                    recipe.innerHTML += "Quantity: " + entry[1] + "<br>";
                    knut += 20 * Number(entry[1]);
                }
                break;

            case "Amount Boomslang":
                if (entry[1] != "" && boomslang.checked) {
                    recipe.innerHTML += "Quantity: " + entry[1] + "<br>";
                    knut += 15 * Number(entry[1]);
                }
                break;

            case "Amount Knotgrass":
                if (entry[1] != "" && knotgrass.checked) {
                    recipe.innerHTML += "Quantity: " + entry[1] + "<br>";
                    knut += 18 * Number(entry[1]);
                }
                break;*/
                case "temperature":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<br>" + "Temperature: " + entry[1] + "<br>";
                    }
                    break;
                case "degrees":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        recipe.innerHTML += "Heat up/cool down to " + entry[1] + " degrees" + "<br>";
                    }
                    break;
                case "tempTime":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        recipe.innerHTML += "For " + entry[1] + " seconds" + "<br>";
                    }
                    break;
                case "consistencyTemp":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        recipe.innerHTML += "Until consistency is " + entry[1] + "<br>";
                    }
                    break;
                case "colorTemp":
                    if (entry[1] != "" && heat.checked || cool.checked) {
                        recipe.innerHTML += "Until color looks like this " + entry[1] + "<br>" + "<br>";
                    }
                    break;
                case "stir":
                    if (entry[1] != "") {
                        recipe.innerHTML += "<br>" + "Stir level: " + entry[1] + "<br>";
                    }
                    break;
                case "stirTime":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        recipe.innerHTML += "Stir for " + entry[1] + " seconds" + "<br>";
                    }
                    break;
                case "consistencyStir":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        recipe.innerHTML += "Until consistency is " + entry[1] + "<br>";
                    }
                    break;
                case "colorStir":
                    if (entry[1] != "" && slow.checked || fast.checked) {
                        recipe.innerHTML += "Until color looks like this " + entry[1] + "<br>" + "<br>";
                    }
                    break;
            }
        }
    }
    function ingredients(_event) {
        let recipe = document.querySelector("#display");
        let total = 0;
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            let selector = "[value='" + entry[1] + "']"; // "[name='" + entry[0] + "'][value='" + entry[1] + "']";
            let item = document.querySelector(selector);
            let itemPrice = Number(item.getAttribute("price"));
            if (entry[0] == "Ingredients" && entry[1] != "") {
                let amount = Number(formData.get("Amount"));
                itemPrice = amount * itemPrice;
                recipe.innerHTML += "Ingredient(s): " + entry[1] + itemPrice;
            }
            total += itemPrice;
        }
        recipe.innerHTML += "Total: " + coins(total);
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
})(L03_Hexenkessel || (L03_Hexenkessel = {}));
//# sourceMappingURL=script.js.map