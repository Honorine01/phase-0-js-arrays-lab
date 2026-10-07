//let allows me to reassign the variable later first position 0 is Laptop
let products = ["Laptop", "Phone", "Headphones", "Monitor"];
//products[0] gets the first product, which is "Laptop".
function logFirstProduct() {
  console.log(products[0]);
}
function addProduct(Keyboard) {
  products.push(Keyboard);
}
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  } else {
    console.log("Invalid position");
  }
}
function removeLastProduct() {
  products.pop();
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
