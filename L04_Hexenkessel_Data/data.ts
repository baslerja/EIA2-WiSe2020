namespace L04_Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {
        [category: string]: Item[];
    }

    export let data: Data = {
        Ingredients: [
            { name: "Fluxweed", price: 20 },
            { name: "Boomslang skin", price: 15 },
            { name: "Knotgrass", price: 18 }
        ]
    };
}