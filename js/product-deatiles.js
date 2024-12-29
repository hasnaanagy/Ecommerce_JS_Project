import { products,updateCounter,goUp } from "../services/utils.js"
//footer up button
let upButton=document.getElementById("up")
goUp.call(upButton)

//view product details
let productSection=document.querySelector(".product-section");
const card=document.createElement("div")
card.classList.add("card")
let product=JSON.parse(localStorage.getItem("clicked-product"))
card.innerHTML=`<img src=${product.Image} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 >Name:${product.name}</h5>
              <h5 >Price: ${product.price}</h5>
              <h5>Quantity: ${product.quantity} </h5>
              <h5>Category:${product.category}  </h5>
            </div>`;

   productSection.append(card);   

//update counter
  let cartCounter = 0;
  let addButton=document.querySelector(".add-product")
  document.addEventListener('DOMContentLoaded', function () {
    let localCounter=localStorage.getItem("cart-counter")
    if(Number(localCounter)>0){
        cartCounter=Number(localCounter)
        updateCounter(localCounter)
    }
    addButton.addEventListener("click", function (e) {
     console.log(e.target)
     console.log("cartcounter")
        cartCounter++;
        localStorage.setItem("cart-counter",cartCounter)
        updateCounter(localStorage.getItem("cart-counter"))
        let cartProduct=JSON.parse(localStorage.getItem("cart-products"))||[];
        cartProduct.push(product)
        localStorage.setItem("cart-products",JSON.stringify(cartProduct))
     
    });
  });