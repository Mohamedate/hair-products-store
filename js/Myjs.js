// ------------------ add class active to header -----------------
let header = document.querySelector(".header"),
bestSeller = document.querySelector(".best-seller");
window.addEventListener("load",function() { 
    header.classList.add("active");
})



// ------------------ add sticky class to navbar --------------------
let navBar = document.querySelector(".navbar"),
 menuItems = document.getElementById("menuItems"),
menuItemsLi = document.querySelectorAll("#menuItems a"),
allProducts = document.querySelector(".all-products"),
btnUp  = document.querySelector(".up-btn");



window.addEventListener("scroll",function() { 
    menuItems.classList.remove("show");
    if(this.scrollY <= 500) { 
        menuItemsLi.forEach((li) => li.classList.remove("active"));
        menuItemsLi[0].classList.add("active");
    }
    if(this.scrollY === 0) { 
        navBar.classList.remove("sticky");
    } else { 
        navBar.classList.add("sticky")
    }

// ----------------- add active to links on navbar when scroll webpage-----------------
  if(this.scrollY >= 550) { 
    menuItemsLi.forEach((li) => li.classList.remove("active"));
    btnUp.classList.add("active");
        menuItemsLi[1].classList.add("active");
       
    } else { 
        menuItemsLi[1].classList.remove("active");
    btnUp.classList.remove("active");

    }
    if(this.scrollY >= 350) { 
        bestSeller.classList.add("active");
    }
    if(this.scrollY >= 1300) { 
        menuItemsLi.forEach((li) => li.classList.remove("active"));
        allProducts.classList.add("active");
     
            menuItemsLi[2].classList.add("active");
           
        } else { 
            menuItemsLi[2].classList.remove("active");
        }

        if(this.scrollY >= 2500) { 
            menuItemsLi.forEach((li) => li.classList.remove("active"));
                menuItemsLi[3].classList.add("active");
               
            } else { 
                menuItemsLi[3].classList.remove("active");
            }
})


//----------------- btn-scroll to Top ------------------
btnUp.addEventListener("click", function() { 
    window.scrollTo({ 
        top: 0,
        behavior: 'smooth',
    });
})


// ----------------- add active to links on navbar -----------------
menuItemsLi.forEach((li) => { 

    li.addEventListener("click",function() { 
        menuItemsLi.forEach((li) => li.classList.remove("active"));

        li.classList.add("active");
    });
})

// --------------- toggle menu -----------------
function toggle() { 
    menuItems.classList.toggle("show");
}


