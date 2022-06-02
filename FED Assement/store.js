{
  ("product");
  [
    {
      name: "iphone 13 Pro",
      brand: "apple",
      description: "iphone 13 Pro",
      price: "&1280",
    },
    {
      name: "iphone 13",
      brand: "apple",
      description: "iphone 13",
      price: "$280",
    },
    {
      name: "iphone SE",
      brand: "apple",
      " description": "iphone SE",
      price: "$200",
    },
    {
      name: "iphone 12",
      brand: "apple",
      " description": "iphone 12",
      price: "$300",
    },

    {
      name: "iPad Pro",
      brand: "apple",
      " description": "iPad Pro",
      price: "$999",
    },
    {
      name: "iPad Air",
      brand: "apple",
      " description": "iphone SE",
      price: "$749",
    },
    {
      name: "iPad",
      brand: "apple",
      " description": "iPad",
      price: "$429",
    },
    {
      name: "iPad Mini",
      brand: "apple",
      " description": "iPad",
      price: "$649",
    },
  ];
}
var addToCartButtons = document.getElementsByClassName("shop-item-button");
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener("click", addToCartClicked);
}
function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}
