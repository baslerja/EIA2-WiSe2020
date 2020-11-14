namespace L05_Hexenkessel_Client {
    window.addEventListener("load", handleLoad);

    async function handleLoad(_event: Event): Promise<void> {
        console.log("Start");

        let response: Response = await fetch("data.json");
        let offer: string = await response.text();
        let data: Data = JSON.parse(offer);

        generateContent(data);

        let addInfo: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addInfo");
        let addIngredients: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addIngredients");
        let addPrep: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addPrep");
        let addStir: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#addStir");
        let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#sendRecipe");

        addInfo.addEventListener("click", displayInfo);
        addIngredients.addEventListener("click", displayIngredients);
        addPrep.addEventListener("click", displayPrep);
        addStir.addEventListener("click", displayStir);
        submit.addEventListener("click", sendOrder);
    }

    async function sendOrder(_event: MouseEvent): Promise<void> {
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        await fetch("index.html?" + query.toString());
        alert("Recipe sent!");
    }

    function displayInfo(_event: MouseEvent): void {
        let showInfo: HTMLFormElement = <HTMLFormElement>document.querySelector("showInfo");
        showInfo.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);

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

    function displayIngredients(_event: MouseEvent): void {
        let showIngredients: HTMLFormElement = <HTMLFormElement>document.querySelector("showIngredients");

        let formData: FormData = new FormData(document.forms[1]);
        let total: number = 0;

        for (let entry of formData) {
            if (entry[0] == "Ingredients") {
                let selector: string = "[value='" + entry[1] + "']";
                let item: HTMLInputElement = <HTMLInputElement>document.querySelector(selector);

                let chosenAmount: string = "x" + entry[1];
                let amount: number = Number(formData.get(chosenAmount));

                let priceItem: number = Number(item.getAttribute("price"));
                total = amount * priceItem;

                showIngredients.innerHTML += amount + " " + entry[1] + "<br>";
            }
        }
    }

    function displayPrep(_event: MouseEvent): void {
        let heat: HTMLDivElement = <HTMLDivElement>document.querySelector("#hot");
        let cool: HTMLDivElement = <HTMLDivElement>document.querySelector("#cold");
        let showPrep: HTMLFormElement = <HTMLFormElement>document.querySelector("showPrep");

        let formData: FormData = new FormData(document.forms[1]);

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

    function displayStir(_event: MouseEvent): void {
        let slow: HTMLDivElement = <HTMLDivElement>document.querySelector("#slow");
        let fast: HTMLDivElement = <HTMLDivElement>document.querySelector("#fast");
        let showPrep: HTMLFormElement = <HTMLFormElement>document.querySelector("showPrep");

        let formData: FormData = new FormData(document.forms[1]);

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

    function coins(_price: number): string {
        let knut: number;
        let sickel: number;
        let galleonen: number;
        let coins;

        if (_price < 29) {
            coins = _price.toString() + " Knut";
        } else if (_price < 493) {
            sickel = _price / 29;
            knut = _price % 29;
            coins = sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";

        } else {
            galleonen = _price / 493;
            _price %= 493;
            sickel = _price / 29;
            knut = _price % 29;

            coins = galleonen.toFixed(0) + " Galleonen" + sickel.toFixed(0) + " Sickel" + knut.toFixed(0) + " Knut";
        }
        return coins;
    }
}
