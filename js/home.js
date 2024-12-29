import { products,all,bags,clothes,shoes,updateCounter,goUp } from "../services/utils.js";

//slider logic
let nextButton=document.querySelector("div.slider-next")
let prevButton=document.querySelector("div.slider-prev")
let sliderImg=document.querySelector("div.slider-img");
const sliderImgs=["../images/slider-1.jpg","../images/s2.jpg","../images/bagg.jpg","../images/sunglass.jpg"]
let currentImage=0
nextButton.addEventListener("click",function() {
    currentImage++
    currentImage===sliderImgs.length?currentImage=0:currentImage
    sliderImg.style.backgroundImage=`url(${sliderImgs[currentImage]})`
  })
  prevButton.addEventListener("click",function() {
    
    currentImage===0?currentImage=sliderImgs.length-1:currentImage--
    sliderImg.style.backgroundImage=`url(${sliderImgs[currentImage]})`
  })

  //filter products by category
  let productsSection=document.getElementById("products")
  let allCategory=document.querySelector("div.all")
  let clothesCategory=document.querySelector("div.clothes")
  let bagCategory=document.querySelector("div.bags")
  let shoesCategory=document.querySelector("div.shoes")
  console.log(allCategory)

function createCard(id,img,name,price) {
const card=document.createElement("div")
card.classList.add("card")
card.innerHTML=`<img src=${img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 >${name}</h5>
                  <h5 >${price}$</h5>
                <div class="icons">
                    <img  src="../images/eye.png" alt="" class="view-detailes" >
                    <img src="../images/plus.png" alt="" class="add-to-cart">
                </div>
                </div>`
                
                card.addEventListener("click",function(e){
                  if(e.target.classList.contains("card-body")||e.target.classList.contains("view-detailes")||e.target.classList.contains("card-img-top")){
                    let product=products.find((product)=>{
                      return product.id==id;
                    })
                    localStorage.setItem("clicked-product",JSON.stringify(product))
                     window.location.href="../html/product-details.html"
                  
                  }else if(e.target.classList.contains("add-to-cart")){
                    let product=products.find((product)=>{
                      return product.id==id;
                    })
                     let cartProduct=JSON.parse(localStorage.getItem("cart-products"))||[];
                     cartProduct.push(product)
                     localStorage.setItem("cart-products",JSON.stringify(cartProduct))

                  }
                })
   productsSection.append(card);   
  }

 (function (){
    productsSection.innerHTML=""
    products.forEach((product)=>{
        createCard(product.id,product.Image,product.name,product.price)
      })
})()
console.log(JSON.parse(localStorage.getItem("cart-products")))
  function category(category) {  
    if(category===all){
        this.addEventListener("click", function(){
            productsSection.innerHTML=""
            products.forEach((product)=>{
                createCard(product.id,product.Image,product.name,product.price)
              })
        }) 
    }else{
        this.addEventListener("click", function(){
            let filteredProducts= products.filter((product)=>{
            return product.category===category
            })
           if(filteredProducts){
                  productsSection.innerHTML=""
               filteredProducts.forEach((product)=>{
                   createCard(product.id,product.Image,product.name,product.price)
                 })    
           }else{
             productsSection.innerHTML=""
              productsSection.innerHTML="<p>no items in this section</p>"
           }
           })
    }

  }
category.call(allCategory,all)
category.call(clothesCategory,clothes)
category.call(shoesCategory,shoes)
category.call(bagCategory,bags)

  //add to cart 
  let cartCounter = 0;
  document.addEventListener('DOMContentLoaded', function () {
    let localCounter=localStorage.getItem("cart-counter")
    if(Number(localCounter)>0){
        cartCounter=Number(localCounter)
        updateCounter(localCounter)
    }
    productsSection.addEventListener("click", function (e) {
     console.log(e.target)
     console.log("cartcounter")
      if (e.target.classList.contains("add-to-cart")) {
        cartCounter++;
        localStorage.setItem("cart-counter",cartCounter)
        updateCounter(localStorage.getItem("cart-counter"))
      }
      else{
        console.log(e.target)
      }
    });
  });

//footer up button
let upButton=document.getElementById("up")
goUp.call(upButton)
 
