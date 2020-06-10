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
		vegetarian: true,
		dairy: true,
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
//used to clear the cart
function clearCart(x) {
	s2 = getElementById(x);
	s2 = [];
	return s2;
}
// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";

}


	
// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos
 
function populateListProductChoices(slct1, slct2) {
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
	//var optionArray = restrictListProducts(products, s1.value);
	var optionArray = getProducts();
	optionArray = restrictListProducts(optionArray, s1.id);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>


		//add smallest value one at a time in prices so it will be ordered 
		//insertion sort
		for (i = 1; i < optionArray.length; i++) {  
			key = optionArray[i].price;  
			j = i - 1;  
			/* Move elements of arr[0..i-1], that are  
			greater than key, to one position ahead  
			of their current position */
			while (j >= 0 && optionArray[j].price > key) {  
				optionArray[j + 1].price = optionArray[j].price;  
				j = j - 1;  
			}  
			optionArray[j + 1].price = key;  
		} 
		  
	var para = document.createElement("P");
	para.innerHTML = "Here is our finest selection :  ";
	para.appendChild(document.createElement("br"));
	para.appendChild(document.createElement("br"));
	for (i = 0; i < optionArray.length; i++) {
		
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var inputNbr = document.createElement("input");
		inputNbr.type = "number";
		inputNbr.name = "product";
		inputNbr.id = productName;
		inputNbr.value = 0;
		inputNbr.min = 0;
		para.appendChild(inputNbr);
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.htmlFor = productName+" "+productPrice;
		label.appendChild(document.createTextNode(" "+productName+" "+productPrice + "$"));
		para.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		para.appendChild(document.createElement("br"));    
	}
	s2.appendChild(para);
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price


function selectedItems(x){
	
	var ele = document.getElementsByName("product");
	
	
	var c = document.getElementsByClassName(x);

	
	for(n=0;n<c.length;n++){
		c[n].innerHTML = "";
		var chosenProducts = [];
		// build list of selected item
		var para = document.createElement("P");
		para.innerHTML = "You selected : ";
		para.appendChild(document.createElement("br"));
		for (i = 0; i < ele.length; i++) { 
			if (ele[i].value > 0) {
				para.append(ele[i].value + " ");
				para.appendChild(document.createTextNode(ele[i].id));
				para.appendChild(document.createElement("br"));
				chosenProducts.push(ele[i].id);
				chosenProducts.push(ele[i].value);
			}
		}
		
			
		// add paragraph and total price
		c[n].appendChild(para);
		//para = document.createElement("P");
		c[n].appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts) + "$"));
	}	
}
