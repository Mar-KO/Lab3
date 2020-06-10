// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		vegetable: true,
		glutenFree : true,
		price: 1.99
	},
	{
		name: "bread",
		vegetarian: true,
		grains: true,
		price: 2.35
	},
	{
		name: "salmon",
		protein: true,
		glutenFree : true,
		price: 10.00
	},
	{
		name: "tuna",
		protein: true,
		glutenFree : true,
		price: 13.00
	},
	{
		name: "rice",
		vegetarian: true,
		grains: true,
		price: 0.99
	},
	{
		name: "cheese",
		dairy: true,
		vegetarian: true,
		glutenFree: true,
		price: 5.00
	},
	{
		name: "tomato",
		vegetarian: true,
		fruit : true,
		glutenFree: true,
		price: 0.50
	},
	{
		name: "lettuce",
		vegetarian: true,
		vegetable : true,
		glutenFree: true,
		price: 3.00
	},
	{
		name: "sirloin steak",
		protein : true,
		glutenFree: true,
		price: 20.00
	},
	{
		name: "fried chicken",
		protein : true,
		price: 10.00
	},
];
	
function getProducts() {

	return products;
}

// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "displayCartDairy") && (prods[i].dairy == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "displayCartProtein Foods") && (prods[i].protein == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "displayCartGrains" && (prods[i].grains == true)){
			product_names.push(prods[i]);

		}else if ((restriction == "displayCartVegetables") && (prods[i].vegetable == true)){
			product_names.push(prods[i]);
		}else if ((restriction == "displayCartFruits") && (prods[i].fruit == true)){
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<chosenProducts.length; i+=2) {
		for(j = 0; j < products.length; j++){
			if(chosenProducts[i] == products[j].name){
				totalPrice = totalPrice + products[j].price*chosenProducts[i+1];
			}
		}
	}
	return totalPrice;
}