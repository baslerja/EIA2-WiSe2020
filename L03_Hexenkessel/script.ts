namespace L03_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");

        form.addEventListener("change", handleChange);
    }

    function handleChange(_event: Event): void {
        let dragon: HTMLDivElement = <HTMLDivElement>document.querySelector("#dragon");
        let witch: HTMLDivElement = <HTMLDivElement>document.querySelector("#witch");
        let raven: HTMLDivElement = <HTMLDivElement>document.querySelector("#raven");
        let liquid: HTMLDivElement = <HTMLDivElement>document.querySelector("#liquid");
        let medium: HTMLDivElement = <HTMLDivElement>document.querySelector("#medium");
        let tough: HTMLDivElement = <HTMLDivElement>document.querySelector("#tough");

        let recipe: HTMLDivElement = <HTMLDivElement>document.querySelector("#display");
        recipe.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

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
}
