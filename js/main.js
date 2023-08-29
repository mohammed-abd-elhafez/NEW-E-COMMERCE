"use strict"
// debugger;

// hide news bar when full bag is opened
let fullBag = document.querySelector(".full-bag");
let body = document.querySelector("body");
let bagHasClass = fullBag.classList.contains("show");
let viewFullBagBtn = document.querySelector(".view-full-bag-btn");
let returnToPage = document.querySelector(".return-to-main-page");
viewFullBagBtn.addEventListener("click", () => {
    fullBag.classList.add("show");
    stopBodyScroll();
    hideNewsBar();
    closeSideCart();
});

returnToPage.addEventListener("click", () => {
    fullBag.classList.remove("show");
    stopBodyScroll();
    hideNewsBar();
    body.classList.toggle("stop");

    
});

function stopBodyScroll () {
body.classList.toggle("stop1");
}
function hideNewsBar () {
news.classList.toggle("hide");
}
function closeSideCart () {
    shoppingCart.classList.toggle("animate");
    setTimeout(() => {
        mainCart.classList.remove("open");
        shoppingCart.classList.remove("animate");
    }, 700);
}

let allProducts = document.querySelectorAll(".products-container .product");
let leftProducts = document.querySelectorAll(".products-container .product.left");
let medLeftProducts = document.querySelectorAll(".products-container .product.med-left");
let medRightProducts = document.querySelectorAll(".products-container .product.med-right");
let rightProducts = document.querySelectorAll(".products-container .product.right");

let observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
        if (entry.isIntersecting) {
            observer.unobserve(entry.target);
        }
    })
}, {
    threshold: 0.5,
});

leftProducts.forEach((product) => {
    observer.observe(product);
});
medLeftProducts.forEach((product) => {
    observer.observe(product);
});
medRightProducts.forEach((product) => {
    observer.observe(product);
});
rightProducts.forEach((product) => {
    observer.observe(product);
});

// allProducts.forEach((product) => {
//     observer.observe(product);
// })

// start set buttons attributes
let allButtons = document.querySelectorAll("button");
function setBtnAttr(arr) {
    arr.forEach((btn) => {
        btn.setAttribute("aria-label", "button");
    });
};
// setBtnAttr(allButtons);
document.addEventListener('DOMContentLoaded', setBtnAttr(allButtons));
// end set buttons attributes


// start set links attributes
let allLinks = document.querySelectorAll("a");
function setLinkAttr(arr) {
    arr.forEach((link) => {
        link.setAttribute("aria-label", "link");
        link.href = "destination"
        // link.href = "temp.html"
    });
};
document.addEventListener('DOMContentLoaded', setLinkAttr(allLinks));
// start set links attributes

function lazyLoading() {
    let imgs = Array.from(document.querySelectorAll("img"));
    imgs.forEach((img) => {
        img.setAttribute("loading", "lazy");
        img.alt = "fitness clothes, gym clothes"
    });
    let firstImg = document.querySelector(".first-img img");

    // firstImg.removeAttribute("loading");
};
lazyLoading();
// document.addEventListener("DOMContentLoaded", lazyLoading());

function imageAlt() {
    let imgs = Array.from(document.querySelectorAll("img"));
    imgs.forEach((img) => {
        img.alt = "fitness clothes, gym clothes";
    });

};
imageAlt();
// document.addEventListener("DOMContentLoaded", imageAlt());



// let news = document.querySelector(".news");
// let previousText = document.querySelector(".previous");
// let nextText = document.querySelector(".next");
// let textContainer = document.querySelector(".text-container");
// let textArray = Array.from(textContainer.querySelectorAll(".text p"));
// let current = 1;
// addActive();

// function removeActive(array) {
//     if (textArray.length !== 1) {
//         array.forEach(element => {
//             element.classList.remove("active");
//         });
//     }
// };

// function addActive() {
//     removeActive(textArray);
//     textArray[current - 1].classList.add("active");
//     if (textArray.length === 1) {
//         textArray[0].classList.add("active");

//     }
// }
// nextText.addEventListener("click", () => {
//     current = current === textArray.length ? 1 : current + 1;
//     addActive();

// });

// previousText.addEventListener("click", () => {
//     current = current !== 1 ? current - 1 : textArray.length;
//     addActive();
// });

// let clickInterval = setInterval(() => {
//     previousText.click();
// }, 4000);
// ***************************************************************
let news = document.querySelector(".news");
let previousText = document.querySelector(".previous");
let nextText = document.querySelector(".next");
let textContainer = document.querySelector(".text-container");
let textArray = Array.from(textContainer.querySelectorAll(".text p"));
let current = 0; // Start at 0 to simplify the modulo operation
let clickInterval;
function addActive() {
    textArray.forEach((element, index) => {
        element.classList.toggle("active", index === current);
    });
}

function nextClick() {
    current = (current + 1) % textArray.length;
    addActive();

}
let summary = document.querySelector(".full-bag .cart-summary .check-out-help summary");
summary.addEventListener("click", () => {
    summary.classList.toggle("show")
})
function previousClick() {
    current = (current - 1 + textArray.length) % textArray.length;
    addActive();
    // console.log(`length : ${textArray.length}`)
    // console.log(`current : ${current}`)
    // console.log("#".repeat(10))

}

nextText.addEventListener("click", nextClick);

previousText.addEventListener("click", previousClick);

function startInterval() {
    clickInterval = setInterval(previousClick, 4000);
}

function stopInterval() {
    clearInterval(clickInterval);
}

addActive();
startInterval();

// ****************************************************************









// start quick-add icon
let quickAddIcon = document.querySelectorAll(".product .quick-add-icon");
let quickAdd = document.querySelectorAll(".quick-add")



quickAddIcon.forEach((icon, index) => {
    icon.addEventListener("click", (e) => {
        let haveClass = quickAdd[index].classList.contains("show");
        let isIcon = e.target.closest(".quick-add-icon").classList.contains("quick-add-icon");
        if (isIcon) {
            if (!haveClass) {
                quickAdd[index].classList.toggle("show");
            } else {
                quickAdd[index].classList.remove("show");
            }
        } else {
            return;
        }

    });

})

function removeClassName(array, className) {
    array.forEach((ele) => {
        ele.classList.remove(`${className}`);
    })
}


let backToTop = document.querySelector(".back-to-top");


backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

let section = Array.from(document.querySelectorAll(".section"));
let wrapMe = document.querySelectorAll(".wrap-me");


function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
function getArrayLength(array) {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        newArray.push(i);

    }
    return newArray
}

let shuffledArray = shuffleArray(getArrayLength(section));

document.addEventListener("DOMContentLoaded", function () {

    function a(arr) {
        let section1 = section[arr[0]];
        let section2 = section[arr[1]];
        let section3 = section[arr[2]];
        wrapMe[0].appendChild(section1)
        wrapMe[1].appendChild(section2)
        wrapMe[2].appendChild(section3)
    }

    a(shuffledArray)
});


// start accordion
let h5Title = document.querySelectorAll(".nav-ul .nav-li h5");
let navUl = document.querySelectorAll(".nav-ul .nav-li");

h5Title.forEach((title, index) => {
    title.addEventListener("click", () => {
        navUl[index].classList.toggle("show");
    })
});
// end accordion



// start region selection
let selectRegionBtn = document.querySelectorAll(".select-region");
let regionName = document.querySelectorAll(".region");
let regionsImgs = document.querySelectorAll(".regions-flags");
let firstRegionSelector = document.querySelector(".region-selection-container");
let regionsOptions = document.getElementById("regions");
let haveClass = firstRegionSelector.classList.contains("open");
let submitButton = document.querySelector(".first-region-selection .submit");
let closeRegionSelection = document.querySelector(".first-region-selection .close");

const flags = {
    ksa: "/regionsFlags/ksa.png",
    syria: "/regionsFlags/syria.png",
    iraq: "/regionsFlags/iraq.png",
    oman: "/regionsFlags/oman.png",
    jordan: "/regionsFlags/jordan.png",
    morocco: "/regionsFlags/morocco.png",
    eg: "/regionsFlags/egy.png"
};
selectRegionBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        firstRegionSelector.classList.toggle("open");
    });
});

closeRegionSelection.addEventListener("click", () => {
    closeSelector();
});

submitButton.addEventListener("click", () => {
    changeRegionInfo();
});
function changeRegionInfo() {
    let selectedOption = regionsOptions.value;
    changeRegionName(selectedOption);
    changeRegionFlag(selectedOption);
    closeSelector();

};

function changeRegionFlag(selected) {
    regionsImgs.forEach((img) => {
        img.src = flags[selected];
    });
};

function changeRegionName(selected) {
    regionName.forEach((region) => {
        region.textContent = selected;
    });
};

function closeSelector() {
    firstRegionSelector.classList.remove("open");
};

// end region selection


// start side bar

let showSideBar = document.querySelector(".show-side-bar");
let sideBar = document.querySelector(".side-bar-container");
let closeSideBar = document.querySelector(".close-side-bar");

showSideBar.addEventListener("click", function (e) {
    sideBar.classList.toggle("show");
    document.body.classList.toggle("stop");
});
closeSideBar.addEventListener("click", function (e) {
    document.body.classList.remove("stop");

    setTimeout(() => {
        sideBar.classList.remove("show");

    }, 1000);
    setTimeout(() => {
        sideBar.classList.remove("animate");

    }, 1000);
    sideBar.classList.toggle("animate")

});
// end side bar

let sideBarTitles = document.querySelectorAll(".side-bar-nav-ul .side-bar-nav-li .title");
let sideBarNavUls = document.querySelectorAll(".side-bar-nav-ul .side-bar-nav-li ul");
let titleChevrons = document.querySelectorAll(".side-bar-nav-ul .side-bar-nav-li .title-chevron");
sideBarTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        sideBarNavUls[index].classList.toggle("show");
        titleChevrons[index].classList.toggle("rotate");
        title.classList.toggle("hide-border")
    });
});


// start pagination
let sideNav = document.querySelectorAll(".side-navbar div");
let paginationNav = Array.from(sideNav);

let sectionContentContainer = document.querySelectorAll(".section-content-container");
let sectionArray = Array.from(sectionContentContainer);

paginationNav.forEach((nav) => {
    nav.addEventListener("click", function () {
        removeActiveNav(paginationNav);
        addActiveNav(this);
        let content = this.dataset.section;
        let section = document.querySelector(`.${content}`)
        removeActiveNav(sectionArray);
        addActiveNav(section);

    });
});

function removeActiveNav(arr) {
    arr.forEach((e) => {
        e.classList.remove("active");
    });
};

function addActiveNav(ele) {
    ele.classList.add("active");
};

// start placeholder replacer

let allTheImg = document.querySelectorAll("img");

allTheImg.forEach((e) => {
    e.addEventListener("error", () => {
        e.src = "IMGS/white.svg"
    })

})
// end placeholder replacer

// start cart
let cartToggler = document.querySelector(".shopping-cart-toggler");
let cartCloser = document.querySelector(".close-cart");
let shoppingCart = document.querySelector(".shopping-cart-container");
let totalPrice = document.querySelectorAll(".total-price");


let mainCart = document.querySelector(".shopping-cart")
cartToggler.addEventListener("click", () => {
    shoppingCart.classList.toggle("show");
    shoppingCart.classList.toggle("show-pc");
    mainCart.classList.toggle("open");
    document.body.classList.toggle("stop")
});

cartCloser.addEventListener("click", () => {
    shoppingCart.classList.toggle("animate");
    document.body.classList.remove("stop");

    setTimeout(() => {
        mainCart.classList.remove("open");
        shoppingCart.classList.remove("show");
        shoppingCart.classList.remove("show-pc");
        shoppingCart.classList.remove("animate");

    }, 700);


});

let theCards = document.querySelector(".user-items-cards");
let products = document.querySelectorAll(".products-container .product");
let productData = [];
const permanentId = [];
setProductsId(products);
let basket = [];


function initializeBasket() {
    let data = JSON.parse(window.localStorage.getItem("productData")) || [];
    basket = data;
}
initializeBasket();


let productDataArray = extractProductsData(products);
function extractProductsData(arr) {
    if(arr.length !== 0) {
        return Array.from(arr).map((e) => ({
            id: e.id,
            img: e.querySelector(".img img").src,
            name: e.querySelector("a h3").textContent, desc: e.querySelector("a .desc").textContent,
            color: e.querySelector("a .color").textContent,
            price: e.querySelector("a .price").textContent,
        }));
    
    }

}

function extractCartProductsData(arr) {
    let array = [];
    arr.forEach((e) => {
        array.push({
            id: e.id,
            quantity: parseInt(e.querySelector(".select-quantity label span").textContent),
            price: e.querySelector(".item-price").textContent,
        })
    })
    // return Array.from(arr).map((e) => ({
    //     id: e.id,
    //     quantity: parseInt(e.querySelector(".select-quantity label span").textContent),
    //     price: e.querySelector(".item-price").textContent,
    // }));
    return array;
}
 

addNewItemsToLocalStorage();
function addNewItemsToLocalStorage() {
    products.forEach((e) => {
        e.querySelector(".quick-add-icon").addEventListener("click", function () {

            if (basket.length !== 0) {

                let search = basket.find((x) => x.id === e.id) || [];
                if (search.length !== 0) {
                    search.quantity++;

                } else {
                    basket.push({
                        id: e.id,
                        quantity: 1
                    });
                }

            } else {
                basket = [{
                    id: e.id,
                    quantity: 1
                }];
            }

            window.localStorage.setItem("productData", JSON.stringify(basket));
            createCartCards();
            calculateTotalPrice();

        })

    });
};

calculateTotalPrice();
function calculateTotalPrice() {
    let itemsNumber = document.querySelector(".items-numbers .items span");
    let cartProducts = document.querySelectorAll(".user-items-cards .user-item-card");
    let total = 0;
    
    if (cartProducts.length !== 0) {
        itemsNumber.textContent = cartProducts.length;
    } else {
        itemsNumber.textContent = 0;
        totalPrice.forEach((e) => {
            e.textContent = 0;
        })
    }

    basket.forEach((item) => {
        let product = productDataArray.find((p) => p.id === item.id);

        if (product) {
            let quantity = item.quantity;
            let price = parseFloat(product.price.replace("$", ""));
            total += quantity * price;
            totalPrice.forEach((e) => {
                e.textContent = `${total} $`;
            })
        }
    });

    return total;
}
 
function createCartCards() {
    theCards.innerHTML = '';
    let data = JSON.parse(window.localStorage.getItem("productData")) || [];

    if (data.length !== 0) {
        let cartProducts = document.querySelectorAll(".user-items-cards .user-item-card");
        let cartDataArray = extractCartProductsData(cartProducts);


        data.map((x) => {

            let { id, quantity } = x;
            let search = productDataArray.find((x) => x.id === id);
            let newSearch = cartDataArray.some((x) => x.id === id);

            if (newSearch) {
                let theChosenEle = document.querySelectorAll(`.user-items-cards #${search.id}`);
                theChosenEle.forEach((e) => {
                    let span = e.querySelector(".span");
                    span.textContent = quantity;
                })
            } else {
                return (
                    theCards.innerHTML +=
                    `
            <div class="user-item-card" id="${id}">

            <div class="item-img">
              <img src="${search.img}" alt=""">
            </div>

            <div class="item-info">

              <div class="item-title">
                <p class="item-name">${search.name}</p>
                <p class="item-desc">${search.desc}</p>
                <p class="item-color">${search.color}</p>
                <span class="item-price">${search.price}</span>
              </div>

              <div class="item-options">

                <div class="favorite-and-delete">
                  <div class="add-favorite">
                    <i class="fa-regular fa-heart"></i>
                  </div>

                  <div class="delete-item">
                    <i class="fa-regular fa-trash-can"></i>
                  </div>

                </div>

                <div class="select-quantity">
                  <label for="quantity-options">qty:<span class="span">${quantity}</span></label>
                  <select name="" id="quantity-options">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>

              </div>

            </div>
            </div>

            `)
            }

        })


    }

}

document.addEventListener("DOMContentLoaded", createCartCards());


// start set products id
function setProductsId(arr) {
    arr.forEach((ele, index) => {
        ele.id = `product-${index}`
    })
};
// end set products id

function deleteItemFromCart() {
    let cartProducts = document.querySelectorAll(".user-items-cards .user-item-card");

    if (cartProducts.length !== 0) {
        cartProducts.forEach((product) => {
            let deleteBtn = product.querySelector(".delete-item");
            deleteBtn.addEventListener("click", () => {
                let id = product.id;
                product.remove();
                deleteItemFromLocalStorage(id);
                calculateTotalPrice();
            });
        });
    }
}
deleteItemFromCart();


function deleteItemFromLocalStorage(id) {
    let data = JSON.parse(window.localStorage.getItem("productData")) || [];
    let index = data.findIndex((obj) => obj.id === id);

    if (index !== -1) {
        data.splice(index, 1);
        window.localStorage.setItem("productData", JSON.stringify(data));

    }

}



// #############################################################
// #############################################################
// #############################################################

// window.localStorage.setItem("productsId", JSON.stringify(permanentId))
// extractData()
// function extractData() {
//     // console.log(localData)

//     products.forEach((product) => {
//         // console.log(product.children[0].querySelector("img"));
//         product.addEventListener("click", function (e) {
//             let localStorageData = JSON.parse(window.localStorage.getItem("data"));

//             // extract data
//             // first extract id
//             let selectedItem = this;
//             let productId = this.id;
//             let productImg = this.querySelector(".img img").src;
//             let productName = this.querySelector("a h3").textContent;
//             let productDesc = this.querySelector("a .desc").textContent;
//             let productColor = this.querySelector("a .color").textContent;
//             let productPrice = this.querySelector("a .price").textContent;
//             // extract data

//             setTimeout(() => {
//                 if (localStorageData !== 0) {
//                     let search = localStorageData.some(i => i.id === productId);
//                     if (search === true) {
//                         let getObject = localStorageData.find(i => i.id === productId);

//                         // getObject.quantity = 0;
//                         let getIndex = productData.findIndex(i => i.id === getObject.id);
//                         console.log(getIndex)
//                         // console.log(theIndexWeFind[theIndexWeFind.length])
//                         // productData[getIndex].price = "new price"
//                         window.localStorage.setItem("data", JSON.stringify(productData));
//                         console.log("product there sir and we will update the quantity");
//                         addItemToCart(selectedItem, search);

//                     } else {
//                         productData.push({
//                             id: productId,
//                             img: productImg,
//                             name: productName,
//                             desc: productDesc,
//                             color: productColor,
//                             price: productPrice,
//                             quantity: 0
//                         });
//                         window.localStorage.setItem("data", JSON.stringify(productData));
//                         addItemToCart(selectedItem, search);
//                         // console.log("product not there sir and we will push it to the local storage");

//                     }
//                 }
//             }, 500);

//         });

//     });

// }


// addItemToCart()
// function addItemToCart(selectedItem, isItemThere) {
//     let data = JSON.parse(window.localStorage.getItem("data"));

//     if (isItemThere === false || isItemThere === undefined) {
//         theCards.innerHTML += data.map((x) => {

//             let { color, desc, id, img, name, price, quantity } = x;

//             return `
//     <div class="user-item-card" id="${id}">
      
//     <div class="item-img">
//       <img src="${img}" alt=""">
//     </div>
    
//     <div class="item-info">
    
//       <div class="item-title">
//         <p class="item-name">${name}</p>
//         <p class="item-desc">${desc}</p>
//         <p class="item-color">${color}</p>
//         <span class="item-price">${price}</span>
//       </div>
    
//       <div class="item-options">
    
//         <div class="favorite-and-delete">
//           <div class="add-favorite">
//             <i class="fa-regular fa-heart"></i>
//           </div>
    
//           <div class="delete-item">
//             <i class="fa-regular fa-trash-can"></i>
//           </div>
    
//         </div>
    
//         <div class="select-quantity">
//           <label for="quantity-options">qty:</label>
//           <select name="" id="quantity-options">
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//             <option value="9">9</option>
//             <option value="10">10</option>
//           </select>
//         </div>
    
//       </div>
    
//     </div>
//     </div>
    
//     `
//         }).join("")
//     } else {
//         let Card = document.querySelectorAll(".user-items-cards .user-item-card");

//         Card.forEach(e => {
//             // let search = e.some(i => i.id === selectedItem.id);


//             if (e.id === selectedItem.id) {
//                 // console.log(this)
//                 let quantity = e.querySelector("#quantity-options");
//                 quantity.value = (quantity.value + 1);
//                 console.log(quantity.value)

//             }

//         });
//     }



// }
// end cart

// ############################################################
// ############################################################
// ############################################################

