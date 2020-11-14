"use strict";
var L05_Hexenkessel_Client;
(function (L05_Hexenkessel_Client) {
    function generateContent(_data) {
        for (let category in _data) {
            // console.log(category);
            let items = _data[category];
            let group = null;
            group = createIngredient(items, category);
            let fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group)
                fieldset.appendChild(group);
        }
    }
    L05_Hexenkessel_Client.generateContent = generateContent;
    function createIngredient(_items, _category) {
        let group = document.createElement("div");
        for (let item of _items) {
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.setAttribute("price", item.price.toFixed(0));
            checkbox.value = item.name;
            checkbox.name = _category;
            checkbox.id = item.name;
            let label = document.createElement("label");
            label.textContent = item.name;
            label.htmlFor = item.name;
            let stepper = document.createElement("input");
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
})(L05_Hexenkessel_Client || (L05_Hexenkessel_Client = {}));
//# sourceMappingURL=generateContent.js.map