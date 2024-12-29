//footer up button
export function goUp() {
    this.addEventListener("click",function() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      })
     
      }
      export const clothes="clothes"
      export const bags="bags"
      export const shoes="shoes"
      export const all="all"
      
    export const products=[
        {   id:1,
            category:bags,
            Image:"../images/bagg.jpg",
            name:"Bag",
            price:120,
            quantity:5
        },
        {
          id:2,
            category:clothes,
            Image:"../images/hoody.avif",
            name:"Coat",
            price:200,
            quantity:7
        },
        {   id:3,
            category:clothes,
            Image:"../images/hoody.avif",
            name:"Coat",
            price:200,
            quantity:7
        },
        {
          id:4,
            category:clothes,
            Image:"../images/hoody.avif",
            name:"Coat",
            price:200,
            quantity:7
        },
        {
          id:5,
            category:bags,
            Image:"../images/bagg.jpg",
            name:"Bag",
            price:120,
            quantity:5
        },
    
        {
          id:6,
            category:bags,
            Image:"../images/bag2.jpg",
            name:"jacket",
            price:200,
            quantity:5
        },
        {id:7,
            category:clothes,
            Image:"../images/pants.avif",
            name:"Pants",
            price:100,
            quantity:5
        },
        {
          id:8,
            category:shoes,
            Image:"../images/sneakers.avif",
            name:"Sneakers",
            price:250,
            quantity:5
        },
        {
          id:9,
            category:shoes,
            Image:"../images/sneakers2.avif",
            name:"Sneakers",
            price:200,
            quantity:5
        },
    ]
    
    export function updateCounter(counter) {
        let cartCounterDiv=document.querySelector(".cart-counter")
        cartCounterDiv.innerHTML=counter
         cartCounterDiv.style.display="block"
      }
