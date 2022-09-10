let navBar = document.querySelector(".navbar");




// --------------- toggle menu -----------------
function toggle() { 
    menuItems.classList.toggle("show");
}

let singleProduct = document.querySelectorAll(".single-product"),
 featuredProduct = document.querySelectorAll(".all-products .col-3");

featuredProduct.forEach((el) => { 
    el.addEventListener("click",function() { 
        singleProduct.forEach((el) => { 
            el.classList.remove("active");
        })

        
        singleProduct.forEach((s) => { 
           if(this.dataset.name === s.dataset.name) { 
           s.classList.add("active");
          
           }
        })
    })
})
window.addEventListener("scroll",function() { 
    menuItems.classList.remove("show");
  if(this.scrollY >= 550) { 
    document.querySelector(".up-btn").classList.add("active");
       
    } else { 
        document.querySelector(".up-btn").classList.remove("active");

    }
})


//----------------- btn-scroll to Top ------------------
document.querySelector(".up-btn").addEventListener("click", function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
})