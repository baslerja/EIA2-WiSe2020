namespace L04_Hexenkessel { 

    export function generateContent(_data: Data): void {

        for (let category in _data) {
            // console.log(category);
            let items: Item[] = _data[category];

            let group: HTMLElement | null = null;
            group = createIngredient(items, category);

            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }

    function createIngredient(_items: Item[], _category: string): HTMLElement | null {
        let group: HTMLDivElement = document.createElement("div");
        for (let item of _items) {
            let checkbox: HTMLInputElement = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;

            let label: HTMLLabelElement = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;

            let stepper: HTMLInputElement = document.createElement("input");
            stepper.type = "number";
            stepper.name = "amount";
            stepper.min = "1";
            stepper.max = "10";
            stepper.step = "1";
            stepper.value = "0";

            group.appendChild(checkbox);
            group.appendChild(label);
            group.appendChild(stepper);
        }
        return group;
    }
}