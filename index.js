$("#bar").click(function(){
	$("#navbar").addClass("toggle");

})


$("#close").click(function(){
	$("#navbar").removeClass()
})

// Product Page Open
$(".small-image").click(function(){
	$("#MainImg").attr("src", $(this).attr("src"));
})


// Cart Section

var quantity = document.querySelectorAll('.quantity');
var productTotal = document.querySelectorAll('.product-total');
var cartSubTotalEl = document.querySelector('.cart-sub-total');
var shippingFeeEl = document.querySelector('.shipping-fee');
var extraDiscountEl = document.querySelector('.extra-discount');
var cartTotalEl = document.querySelector('.cart-total');


quantity.forEach(quantity => quantity.addEventListener('change', inputChange));

function inputChange(){
	var newVal = this.value;
	var parent = this.parentElement;
	var grantParent = parent.parentElement;
	var cost = grantParent.querySelector('.product-cost').innerText;
	var newCost = cost.slice(1, cost.length);
	var total = newVal * newCost;
	var productTotal = grantParent.querySelector('.product-total');
	productTotal.innerText = ("$"+total);
	updateTotal();
}

let productTotalArray =[];


function updateTotal(){
	let cartSubTotal = 0;
	productTotal.forEach(function(total){
		var onlyTotal = total.innerText.slice(1, total.length)
		productTotalArray.push(onlyTotal);
	})
	let productTotalNumber = productTotalArray.map(function(number){
		return parseInt(number);
	})
	productTotalNumber.forEach(function(item){
		cartSubTotal += item;
	})
	productTotalArray =[];
	cartSubTotalEl.innerText = '$'+cartSubTotal;

	for5PercentDis = (cartSubTotal - (0.05* cartSubTotal));
	for10PercentDis = (cartSubTotal - (0.1* cartSubTotal));
	for15PercentDis = (cartSubTotal - (0.15* cartSubTotal));
	for20PercentDis = (cartSubTotal - (0.20* cartSubTotal));
	const element = `<strike>$10</strike> <span style="color:green"> &nbsp Free</span>`;

	forCartTotal = (cartSubTotal + 10);
	if (cartSubTotal === 0) {
		cartSubTotalEl.innerText = "Your Cart is Empty";
		shippingFeeEl.innerHTML = "NA";
		cartTotalEl.innerText = "NA";
		extraDiscountEl.innerText = "NA";	
	} else if (cartSubTotal >= 150 && cartSubTotal < 300) {
		shippingFeeEl.innerHTML = element;
		cartTotalEl.innerText = '$'+cartSubTotal;	
	} else if (cartSubTotal >= 300 && cartSubTotal < 500) {
		shippingFeeEl.innerHTML = element;	
		cartTotalEl.innerText = '$'+for5PercentDis;
		extraDiscountEl.innerText = "5%";
	} else if (cartSubTotal >= 500 && cartSubTotal < 1000) {
		shippingFeeEl.innerHTML = element;	
		extraDiscountEl.innerText = "10%";
		cartTotalEl.innerText = '$'+for10PercentDis;
	} else if (cartSubTotal >= 1000 && cartSubTotal < 2000) {
		shippingFeeEl.innerHTML = element;	
		extraDiscountEl.innerText = "15%";
		cartTotalEl.innerText = '$'+for15PercentDis;
	} else if (cartSubTotal >= 2000) {
		shippingFeeEl.innerHTML = element;	
		extraDiscountEl.innerText = "20%";
		cartTotalEl.innerText = '$'+for20PercentDis;
	}
	 else {
		shippingFeeEl.innerHTML = "$10";
		cartTotalEl.innerText = '$'+forCartTotal;
		extraDiscountEl.innerText = "Add one more item to get extra discounts";
	}
}
updateTotal();
inputChange();

