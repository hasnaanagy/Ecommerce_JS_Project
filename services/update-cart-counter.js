  //set user name
let userName=document.querySelector(".user-name")
userName.innerHTML=localStorage.getItem("user-name")

//go to cart icon
let cartIcon=document.querySelector(".icon")
cartIcon.addEventListener("click",function () {
  window.location.href="../html/cart.html"
  })

    //logout
    let logout=document.querySelector(".log-out")
    logout.addEventListener("click",function () {
      localStorage.clear()
      window.location.replace("../html/login.html")
      })