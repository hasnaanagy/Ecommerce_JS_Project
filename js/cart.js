import { products,updateCounter,goUp } from "../services/utils.js"

//add products to cart page
let cartProductSetion=document.querySelector(".products-section")
let buyNow=document.querySelector(".buy-now")
let total=document.querySelector(".total")
let cartProducts=JSON.parse(localStorage.getItem("cart-products"))
let filteredProducts=[]
let totalAmount=0;
function createCardItems() {
if(cartProducts){
  for(let i=0;i<cartProducts.length;i++){
    if (!filteredProducts.includes(cartProducts[i])){
     filteredProducts=cartProducts.filter((product)=>{
      return product.id==cartProducts[i].id
    })
    let productDiv=document.createElement("div")
    productDiv.classList.add("product-row")
    productDiv.innerHTML=` <div class="product-info">
            <img src=${filteredProducts[0].Image} alt="">
            <div class="section-1">
                <p>${filteredProducts[0].name} </p>
                <p>${filteredProducts[0].price} $</p>
            </div>
          </div>
            <div class="section-2">
                <p class="minus">-</p>
                <p>${filteredProducts.length}</p>
                <p class="plus">+</p>
            </div>`;
              cartProductSetion.append(productDiv)
              totalAmount+=filteredProducts[0].price*filteredProducts.length
            }
  }
      
      total.innerHTML=`Total Amount:${totalAmount}$`
      buyNow.style.display="block"
}else{
    buyNow.style.display="none"
    total.innerHTML="Oops...Your Cart Is Empty!"
    let emptyIcon=document.createElement("img")
    emptyIcon.classList.add("empty-cart")
    emptyIcon.src="../images/shopping (2).png"
    cartProductSetion.append(emptyIcon)
}
  }
  createCardItems()
//update counter
//   let cartCounter = 0;
//   let addButton=document.querySelector(".add-product")
//   document.addEventListener('DOMContentLoaded', function () {
//     let localCounter=localStorage.getItem("cart-counter")
//     if(Number(localCounter)>0){
//         cartCounter=Number(localCounter)
//         updateCounter(localCounter)
//     }
//     addButton.addEventListener("click", function (e) {
//      console.log(e.target)
//      console.log("cartcounter")
//         cartCounter++;
//         localStorage.setItem("cart-counter",cartCounter)
//         updateCounter(localStorage.getItem("cart-counter"))
//         let cartProduct=JSON.parse(localStorage.getItem("cart-products"))||[];
//         cartProduct.push(product)
//         localStorage.setItem("cart-products",JSON.stringify(cartProduct))
     
//     });
//   });
//footer up button
let upButton=document.getElementById("up")
goUp.call(upButton)
 