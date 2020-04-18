function storeProvision(currentStock, orderedStock) {

    let availableProducts = restock(currentStock, {});
    let productAfterDelivery = restock(orderedStock, availableProducts)

    for (let product of Object.keys(productAfterDelivery)) {
        console.log(`${product} -> ${productAfterDelivery[product]} `)
    }

    function restock(arr, obj) {
        for (let i = 0; i < arr.length; i += 2) {
            const product = arr[i];
            const quantity = Number(arr[i + 1]);

            if (!obj.hasOwnProperty(product)) {
                obj[product] = quantity;
            } else {
                obj[product] += quantity;
            }

        }
        return obj;
    }

}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
