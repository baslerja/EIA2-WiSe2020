"use strict";
var L03_Hexenkessel;
(function (L03_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        let dragon = document.querySelector("#dragon");
        let witch = document.querySelector("#witch");
        let raven = document.querySelector("#raven");
        let liquid = document.querySelector("#liquid");
        let medium = document.querySelector("#medium");
        let tough = document.querySelector("#tough");
        let recipe = document.querySelector("#display");
        recipe.innerHTML = "";
        let formData = new FormData(document.forms[0]);
        for (let entry of formData) {
            switch (entry[0]) {
                case "potion":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Name: " + entry[1] + "<br>";
                    }
                    break;
                case "descript":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Description: " + entry[1] + "<br>";
                    }
                    break;
                case "effect":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Effect: " + entry[1] + "<br>";
                    }
                    break;
                case "time":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Duration: " + entry[1] + " min" + "<br>";
                    }
                    break;
                case "ingredient":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Ingredient: " + entry[1] + "<br>";
                    }
                    break;
                case "amountDragon":
                case "amountWitch":
                case "amountRaven":
                case "temperature":
                    if (entry[1] != "") {
                        recipe.innerHTML += "Temperature: " + entry[1] + " °C" + "<br>";
                    }
                    break;
            }
        }
    }
    /*function coins(_event: Event): void {
        let total: number = 0;
 
        }if (total < 29) {
            total = price.toString + " Knut";
        }
        else if (price < 493); {
            sickel = price / 29;
            knut = price % 29;
            total = sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";
    
        }
        else {
            galleonen = _price / 493;
            price % ; = 493;
            sickel = price / 29;
 
            coins = galleonen.toFixed(0) + " Galleonen" + sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";
        }
        recipe.innerHTML += "Total: " + knut.toFixed(0) + " Knut" + sickel.toFixed(0) + " Sickel" + galleonen.toFixed(0) + " Galleonen";
    }*/
})(L03_Hexenkessel || (L03_Hexenkessel = {}));
//# sourceMappingURL=script.js.map