class ChristmasDinner {

    _budget;
    constructor(budget) {
        this.budget = Number(budget);
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget
    }

    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;
    }

    shopping(product) {
        if (this.budget < Number(product[1])) {
            throw new Error("Not enough money to buy this product");
        }

        this.products.push(product[0]);
        this.budget -= Number(product[1]);

        return `You have successfully bought ${product[0]}!`;
    }

    recipes(recipe) {
        for(let el of recipe.productsList){
            if(!this.products.includes(el)){
                throw new Error("We do not have this product");
            }
        }

        this.dishes.push(recipe)
        
        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){
        if(!this.dishes.find(x => x.recipeName === dish)){
            throw new Error("We do not have this dish");
        }

        if(this.guests.hasOwnProperty(name)){
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`
    }

    showAttendance(){
        return Object.keys(this.guests).reduce((acc, name) => {
            let products= null;
            let recipe = this.guests[name];

            for(let obj of this.dishes){
                products = obj.productsList.join(", ");
            }

            acc += `${name} will eat ${recipe}, which consists of ${products}\n`;
            return acc;
        }, "").trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
