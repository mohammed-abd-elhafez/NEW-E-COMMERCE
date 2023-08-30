"use strict"
// debugger;
console.log("please don't press on ||<<   Z   >>||");

// hide news bar when full bag is opened
let fullBag = document.querySelector(".full-bag");
let body = document.querySelector("body");
let bagHasClass = fullBag.classList.contains("show");
let viewFullBagBtn = document.querySelectorAll(".view-bag");
let returnToPage = document.querySelector(".return-to-main-page");
viewFullBagBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    fullBag.classList.add("show");
    stopBodyScroll();
    hideNewsBar();
    closeSideCart();
    // history.pushState({ overlay: true }, null, '');
    manageHistory();
    handleStepsRendering(stepsIndex);
  });
})
// viewFullBagBtn.addEventListener("click", () => {
//   fullBag.classList.add("show");
//   stopBodyScroll();
//   hideNewsBar();
//   closeSideCart();
//   // history.pushState({ overlay: true }, null, '');
//   manageHistory();
// });
function manageHistory() {
  const overlayVisible = fullBag.classList.contains('show');
  if (overlayVisible) {
    // Add a new history state when overlay is shown
    history.pushState({ overlay: true }, null, '');
  } else {
    // Replace the current history state when overlay is hidden
    history.replaceState(null, null, '');
  }
  window.addEventListener('popstate', (event) => {
    const overlayVisible = fullBag.classList.contains('show');

    if (event.state && event.state.fullBag && !overlayVisible) {
      fullBag.classList.add('show');
    } else if (!event.state && overlayVisible) {
      fullBag.classList.remove('show');
    }
  });

}
returnToPage.addEventListener("click", () => {
  fullBag.classList.remove("show");
  hideNewsBar();
  body.className = "";
  stepsIndex = 0;
  console.log(stepsIndex)
    window.localStorage.setItem("step", stepsIndex);

  // stopBodyScroll();
  // history.replaceState(null, null, '');


});

function stopBodyScroll() {
  body.classList.toggle("stop1");
}
function hideNewsBar() {
  news.classList.toggle("hide");
}
function closeSideCart() {
  shoppingCart.classList.toggle("animate");
  setTimeout(() => {
    mainCart.classList.remove("open");
    shoppingCart.classList.remove("animate");
    shoppingCart.classList.remove("show");
    shoppingCart.classList.remove("show-pc");
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
    // if (entry.isIntersecting) {
    //   observer.unobserve(entry.target);
    // }
  })
}, {
  threshold: 0.1,
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
    link.href = "temp.html"
    // console.log(link)
    if (link.href == "#") {
      console.log("true")
    } else if (link.href.length === 0) {
      link.href = "temp.html"

    }
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
  // let firstImg = document.querySelector(".first-img img");

  // firstImg.removeAttribute("loading");
};
// lazyLoading();
document.addEventListener("DOMContentLoaded", lazyLoading());

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

function previousClick() {
  current = (current - 1 + textArray.length) % textArray.length;
  addActive();

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
setTimeout(() => {
  startInterval();

}, 6000);
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
  body.className = "";

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

let theCards = document.querySelectorAll(".user-items-cards");
let products = document.querySelectorAll(".products-container .product");
let emptyCartShow = document.querySelectorAll(".empty-cart");
let emptyCheckOut = document.querySelectorAll(".cart-summary");
let productData = [];
const permanentId = [];
setProductsId(products);
let basket = [];
// start set products id
function setProductsId(arr) {
  arr.forEach((ele, index) => {
    ele.id = `product-${index}`
  })
};
// end set products id



function initializeBasket() {
  let data = JSON.parse(window.localStorage.getItem("productData")) || [];
  basket = data;

}
initializeBasket();



// first extract all data from products
let productDataArray = extractProductsData(products);
function extractProductsData(arr) {
  if (arr.length !== 0) {
    return Array.from(arr).map((e) => ({
      id: e.id,
      img: e.querySelector(".img img").src,
      name: e.querySelector("a h3").textContent, desc: e.querySelector("a .desc").textContent,
      color: e.querySelector("a .color").textContent,
      price: e.querySelector("a .price").textContent,
    }));

  }

}


// second extract all data from cart products
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

// add item to the local storage by clicking
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
      emptyCart();

    });

  });
};


// call the function when dom loaded because create the cards if there is any data in the local storage
document.addEventListener("DOMContentLoaded", () => {
  createCartCards();
});
let cartProductsArray = Array.from(document.querySelectorAll(".user-item-card"));

// get data from local storage and create the cards in the cart
function createCartCards() {
  // first clean cards container
  document.querySelectorAll(".user-items-cards").forEach((card) => {
    card.innerHTML = '';
  });

  // second get data from local storage 
  let data = JSON.parse(window.localStorage.getItem("productData")) || [];

  // check if there is data in local storage
  if (data.length !== 0) {
    // cartProducts
    let cartDataArray = extractCartProductsData(cartProductsArray);


    data.map((x) => {

      let { id, quantity } = x;
      let search = productDataArray.find((x) => x.id === id);
      let newSearch = cartDataArray.some((x) => x.id === id);

      if (newSearch) {
        let theChosenEle = document.querySelectorAll(`.user-items-cards #${search.id}`);
        theChosenEle.forEach((e) => {
          let span = e.querySelector(".span");
          span.textContent = quantity;
        });
      } else {
        return (

          theCards.forEach((card) => {
            card.innerHTML +=
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

`
          })
        )
      }

    });


  }

}


calculateTotalPrice();
function calculateTotalPrice() {
  let itemsNumber = document.querySelector(".items-numbers .items span");
  let cartProducts = document.querySelectorAll(".user-items-cards .user-item-card");
  let total = 0;
  if (cartProducts.length !== 0) {
    itemsNumber.textContent = cartProducts.length / 2;
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
  })

  return total;
}



function emptyCart() {
  let userItemCard = document.querySelectorAll(".user-item-card");
  let checkOut = document.querySelector(".shopping-cart .checkout");

  if (userItemCard.length !== 0) {

    emptyCartShow.forEach((e) => {
      e.classList.remove("show")
    });

    emptyCheckOut.forEach((e) => {
      e.classList.remove("hide");
    });
    checkOut.classList.remove("hide");
  } else if (basket.length === 0) {
    emptyCartShow.forEach((e) => {
      e.classList.add("show")
    });

    emptyCheckOut.forEach((e) => {
      e.classList.add("hide");
    });
    checkOut.classList.add("hide");

  }



}

deleteItemFromCart();
function deleteItemFromCart() {
  document.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".delete-item");
    if (deleteBtn) {
      const product = deleteBtn.closest(".user-item-card");
      if (product) {
        const id = product.id;

        // Find all cards with the same id
        const cardsToRemove = document.querySelectorAll(`.user-item-card#${id}`);

        // Remove all cards with the same id from the DOM
        cardsToRemove.forEach((card) => {
          card.remove();
        });

        deleteItemFromLocalStorage(id);
        calculateTotalPrice();
        emptyCart();
      }
    }
  });
}

// function deleteItemFromCart() {
//     let cartProducts = document.querySelectorAll(".user-item-card");
//     console.log(cartProducts.length)
//     if (cartProducts.length !== 0) {
//         cartProducts.forEach((product) => {
//             let deleteBtn = product.querySelector(".delete-item");
//             deleteBtn.addEventListener("click", () => {
//                 let id = product.id;
//                 let products = document.querySelectorAll(`#${id}`);
//                 products.forEach((e) => {
//                     e.remove();
//                 });
//                 deleteItemFromLocalStorage(id);
//                 calculateTotalPrice();
//                 emptyCart();

//             });
//         });
//     }
//     // else {
//     //     emptyCart();
//     // }
// }



function deleteItemFromLocalStorage(id) {
  let data = JSON.parse(window.localStorage.getItem("productData")) || [];
  let index = data.findIndex((obj) => obj.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    window.localStorage.setItem("productData", JSON.stringify(data));
    initializeBasket();
  }

}

document.addEventListener("DOMContentLoaded", () => {
  emptyCart();
  deleteItemFromCart();
  // calculateTotalPrice();
});



// #############################################################



// end cart summary toggler

// start steps logic



let stepsIndex = 0;
let mainStepsContainer = document.querySelector(".main-steps-container");

document.addEventListener("DOMContentLoaded", () => {

  mainStepsContainer.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("next-step")) {
      stepsIndex++;
      manageHistory();
      handleStepsRendering(stepsIndex);
    } else if (target.classList.contains("prev-step")) {
      stepsIndex--;
      handleStepsRendering(stepsIndex);
    }
  });

  if (basket.length !== 0) {
    stepsIndex = JSON.parse(localStorage.getItem("step")) || 0;

    if (stepsIndex > 0) {
      fullBag.classList.toggle("show");
      handleStepsRendering(stepsIndex);

    } else {
      handleStepsRendering(stepsIndex);

    }

  }

})

function extractCardsDataFromSideCart(arr) {
  if (arr.length !== 0) {
    return Array.from(arr).map((e) => ({
      id: e.id,
      img: e.querySelector(".item-img img").src,
      name: e.querySelector(".item-name").textContent,
      color: e.querySelector(".item-color").textContent,
      price: parseInt(e.querySelector(".item-price").textContent.replace("$", "")),
      description: e.querySelector(".item-desc").textContent,
      quantity: parseInt(e.querySelector("label .span").textContent),
    }));

  }

}

function extractSummaryDataFromSideCart(element) {
  let dataArr = []
  dataArr.push(
    parseInt(element.querySelector(".items span").textContent),
    parseInt(element.querySelector(".total-price").textContent.replace("$", "")),
  )

  return dataArr;

}
let renderedStepArray = [];

// make sure this function will be called when the user click in view full bag to update the data
function handleStepsRendering(stepNumber) {

  let sideCartProducts = Array.from(document.querySelectorAll(".shopping-cart .user-item-card"));
  let sideCartSummary = document.querySelector(".shopping-cart .cart-summary");

  let extractedCardsData = extractCardsDataFromSideCart(sideCartProducts);
  let extractedSummaryData = extractSummaryDataFromSideCart(sideCartSummary);



  if (renderedStepArray[stepNumber] !== undefined) {
    mainStepsContainer.innerHTML = "";
    mainStepsContainer.innerHTML = renderedStepArray[stepNumber];
    console.log("we already have the `the memoized step` element sir and we will render it directly");
    stepsIndex === 0 ? showFooter() : false;


  } else {

    switch (stepNumber) {
      case 0:

        mainStepsContainer.innerHTML = "";
        renderStepOne(extractedCardsData, extractedSummaryData);
        showFooter();
        renderedStepArray[stepNumber] = mainStepsContainer.innerHTML;
        console.log("sorry sir we dont memoized yet, but we will call the `first step` function right away");
        window.localStorage.setItem("step", stepNumber);

        break;
      case 1:
        console.log(stepNumber)

        mainStepsContainer.innerHTML = "";
        renderStepTwo(extractedCardsData, extractedSummaryData);
        removeFooter();
        console.log("sorry sir we dont memoized yet, but we will call the `second step` function right away");
        renderedStepArray[stepNumber] = mainStepsContainer.innerHTML;
        window.localStorage.setItem("step", stepNumber);
        break;

      case 2:
        mainStepsContainer.innerHTML = "";
        renderStepThree(extractedCardsData, extractedSummaryData);
        removeFooter();
        console.log("sorry sir we dont memoized yet, but we will call the `second step` function right away");
        renderedStepArray[stepNumber] = mainStepsContainer.innerHTML;
        window.localStorage.setItem("step", stepNumber);
        break;

      case 3:
        mainStepsContainer.innerHTML = "";
        renderStepFour(extractedCardsData, extractedSummaryData);
        removeFooter();
        console.log("sorry sir we dont memoized yet, but we will call the `second step` function right away");
        renderedStepArray[stepNumber] = mainStepsContainer.innerHTML;
        window.localStorage.setItem("step", stepNumber);

        break;
    }

  }


  // handleSteps()
}
function removeFooter() {
  let bagFooter = document.querySelector(".full-bag .footer");
  bagFooter.style.display = "none"
}
function showFooter() {
  let bagFooter = document.querySelector(".full-bag .footer");
  bagFooter.style.display = "block"
}

function renderStepOne(dataArr, summaryData) {

  mainStepsContainer.innerHTML =
    ` <div class="check-out-step step-1">
  <div class="check-out-progress">
    <ol>
      <li class="active">
        <span>your bag</span>
      </li>

      <li>
        <span>Information</span>
      </li>

      <li>
        <span>shipping</span>
      </li>

      <li>
        <span>payment</span>
      </li>

      <li>
        <span class="last">complete</span>
      </li>
    </ol>
  </div>


  <div class="product-preview">
    <div class="bag-title">YOUR BAG</div>

    <div class="notice">
      <i class="fa-solid fa-circle-exclamation"></i>
      <strong>Your items aren’t reserved</strong>, checkout quickly to
      make sure you don’t miss out.
    </div>

    <div class="mobile-summary">
      <div class="summary-container">
        <h5 class="summary-title">summary</h5>

        <h5 class="cart-news">
          <p>Spend £45 or over for</p>
          <div class="discount">
            <i class="fa-solid fa-check"></i> free standard shipping
          </div>
          <div class="shipping-progress">
            <span></span>
          </div>
        </h5>

        <div class="items-numbers">
          <p class="items"><span>${summaryData[0]}</span> products</p>
          <div class="total-price">${summaryData[1]}$</div>
        </div>

        <div class="items-numbers">
          <p class="sub-total">sub total</p>
          <div class="total-price">${summaryData[1]}$</div>
        </div>

        <div class="checkout">
          <button class="checkout-btn next-step">
            <i class="fa-solid fa-bag-shopping"></i>
            CHECKOUT SECURELY
          </button>
        </div>
      </div>
    </div>

    <div class="user-items-cards">
   
    </div>

    <div class="cart-summary">
      <div class="summary-container">
        <h5 class="summary-title">summary</h5>

        <h5 class="cart-news">
          <p>Spend £45 or over for</p>
          <div class="discount">
            <i class="fa-solid fa-check"></i> free standard shipping
          </div>
          <div class="shipping-progress">
            <span></span>
          </div>
        </h5>

        <div class="items-numbers">
          <p class="items"><span>2</span> products</p>
          <div class="total-price">50$</div>
        </div>

        <div class="items-numbers">
          <p class="sub-total">sub total</p>
          <div class="total-price">50$</div>
        </div>

        <div class="checkout">
          <button class="checkout-btn next-step">
            <i class="fa-solid fa-bag-shopping"></i>
            CHECKOUT SECURELY
          </button>
        </div>
      </div>

      <p class="check-out-info">CHECKOUT TODAY. INTEREST FREE.</p>

      <p class="check-out-offers">
        <i class="fa-brands fa-cc-amazon-pay"></i>
        Pay in 3 installments of £12
      </p>

      <p class="check-out-info">DELIVERED TO YOUR DOOR.</p>

      <div class="check-out-policy">
        <p>
          <i class="fa-solid fa-arrow-rotate-right"></i>
          Free 30-Day Return Policy!
        </p>
        <p>
          <i class="fa-solid fa-box"></i>
          Free Standard Delivery over £45
        </p>
      </div>

      <details class="check-out-help">
        <summary style="list-style: none">NEED HELP?</summary>
        <ul>
          <li><a href="#">Delivery Information</a></li>
          <li><a href="#">Make A Return</a></li>
        </ul>
      </details>
    </div>
  </div>

  <div class="empty-cart">
    <div class="empty-cart-container">
      <div class="img">
        <img src="IMGS/empty-bag.svg" alt="">
      </div>

      <h5>YOUR BAG IS EMPTY</h5>
      <p>There are no products in your bag</p>
      <button>shop men</button>
      <button>shop women</button>

    </div>
    

  </div>

 </div> `;

  let cardsContainer = document.querySelector(".check-out-step.step-1 .user-items-cards");
  dataArr.map((x) => {

    let { color, description, id, img, name, price, quantity } = x;
    cardsContainer.innerHTML += ` <div class="user-item-card" id="${id}">
        <div class="item-img">
          <img
            src="${img}"
            alt=""
          />
        </div>

        <div class="item-info">
          <div class="item-title">
            <p class="item-name">${name}</p>
            <p class="item-desc">${description}</p>
            <p class="item-color">${color}</p>
            <span class="item-price">$${price}</span>
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
              <label for="quantity-options"
                >qty:<span class="span">${quantity}</span></label
              >
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
      </div>`


  });

}



function renderStepTwo(dataArr, summaryData) {

  mainStepsContainer.innerHTML =
    `<div class="check-out-steps step-2">
    <div class="checkout-content-container">

<div class="client-info">

  <div class="logo">
     <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
    <i class="fa-solid fa-signature"></i>
  </a>
  </div>

  <div class="mobile-summary-toggler">
  </div>

  <div class="check-out-progress">
  <ol>

    <li class="active">
      <span>Information</span>
    </li>

    <li>
      <span>shipping</span>
    </li>

    <li>
      <span>payment</span>
    </li>

    <li>
      <span class="last">complete</span>
    </li>
  </ol>
  </div>

  <div class="dynamic-checkout-content">

    <div class="dynamic-checkout-skeleton">
      <div class="place-holder-line"></div>
      <div class="place-holder-line"></div>
      <div class="place-holder-line"></div>
    </div>

    <div class="dynamic-checkout-buttons">

      <div class="amazon-pay"><i class="fa-brands fa-amazon-pay"></i></div>

      <div class="paypall">
        <i class="fa-brands fa-paypal"></i>
      </div>

      <div class="g-pay">
        <i class="fa-brands fa-google"></i> pay
      </div>

    </div>

  </div>

  <div class="log-in">
    <span>contact</span>
    <div class="have-account">
      Have an account?
    <a href="#">log in</a>
    </div>
   
  </div>

  <div class="get-emails">
    <form action="#">

      <div class="email-input">
        <input type="email" placeholder="EMAIL">
      </div>

     <div class="check-box">
      <label for="email-checkbox">Tick here to get marketing emails (latest news, product drops, sale alerts, and more).</label>
      <div class="input-check">        
        <input type="checkbox" id="email-checkbox">
      </div>
     </div>

    </form>
   
  </div>


  <div class="shipping-info">

    <div class="section-header">
      <h5>shipping address</h5>

        <div class="region-selector">
          <label for="regions">country/region</label>
          <select name="regions" id="regions">
            <option value="ksa">ksa</option>
            <option value="syria">syria</option>
            <option value="iraq">iraq</option>
            <option value="oman">oman</option>
            <option value="jordan">jordan</option>
            <option value="morocco">morocco</option>
            <option value="eg">eg</option>
          </select>
            <i class="chevron fa-solid fa-chevron-down"></i>

        </div>

        <p>Don't see your country listed, head over to our Rest of World store</p>

    </div>

    <div class="section-content">

   <form action="#">

    <div class="field half-field">
      <input type="text" placeholder="First-Name" required>
    </div>

    <div class="field half-field">
      <input type="text" placeholder="Last-Name" required>
    </div>

    <div class="field full-field">
      <input type="text" placeholder="Address Line 1">
    </div>

    <div class="field full-field">
      <input type="text" placeholder="Address Line 2">
    </div>

    <div class="field half-field">
      <input type="text" placeholder="City" required>
    </div>

    <div class="field half-field">
      <input type="text" placeholder="Postal code" required>
    </div>

    <div class="field full-field">
      <input type="text" placeholder="Phone" required>
    </div>

    <div class="btn-container">
      <button class="next-step">continue to shipping            
        <i class="fa-solid fa-chevron-right"></i>  
       </button>

      <button class="prev-step">       
<i class="fa-solid fa-chevron-left"></i>  
return to your bag 
      </button>
    </div>

   </form>

    <p class="terms-notice">By placing your order you agree to Gymshark's <a href="">Terms and Conditions</a>,<a href="#">Privacy Notice</a>and<a href="#">Cookie Policy.</a>
   </p>

    </div>

    

  </div>


</div>

<div class="checkout-product-info">
  <div class="logo">
    <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
   <i class="fa-solid fa-signature"></i>
 </a>
 </div>
 <div class="mobile-summary-toggler">
  <button class="mobile-summary-title">

  <span><i class="fa-solid fa-cart-shopping"></i></span>
  <span class="title"><span>show</span><span>hide</span> order summary</span>
  <span class="the-chevron"><i class="fa-solid fa-chevron-circle-down"></i></span>

  </button>
  <div class="price">${summaryData[1]}$</div>
  </div>

  <div class="checkout-cards">

   
  </div>

  <div class="checkout-summary">
    
    <div class="discount">

     <input type="text" class="coupon" id="coupon-input" placeholder="gift card, redemption or discount code">  
      <button>apply</button>

    </div>

    <div class="checkout-total">

      <div class="sub-total">
        <div>sub-total</div>
        <p class="price">${summaryData[1]}$</p>
      </div>

      <div class="shipping-price">
        <div>shipping</div>
        <p class="price">Calculated at next step</p>
      </div>

    </div>

    <div class="final-total">
      <div class="total-title">total</div>
      <div class="price">${summaryData[1]}$</div>
    </div>

  </div>


 </div>

    </div>

       <div class="terms-and-privacy">
        <a href="#">Refund Policy</a>
        <a href="#">Privacy Notice</a>
        <a href="#">Terms Of Service</a>
      </div>

     </div>  `


  let theContainer = document.querySelector(".step-2 .checkout-cards");
  dataArr.map((x) => {

    let { color, description, id, img, name, price, quantity } = x;
    theContainer.innerHTML += ` <div class="checkout-card-item">
  
        <div class="img">
          <img src="${img}" alt="">
        </div>

        <div class="card-info">
          <div class="title">${name} - <span class="color">${color}</span></div>
            
          <div class="size-and-price">
            <div class="size"> size : M</div>
            <div class="price">${price}$</div>
          </div>

          <div class="desc">${description}</div>
      
      
        </div>

      </div>`


  });



}


function renderStepThree(dataArr, summaryData) {

  mainStepsContainer.innerHTML =
    `  <div class="check-out-steps step-3">
  <div class="checkout-content-container">

<div class="client-info">

<div class="logo">
   <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
  <i class="fa-solid fa-signature"></i>
</a>
</div>

<div class="mobile-summary-toggler">
</div>

<div class="check-out-progress">
<ol>

  <li>
    <span>Information</span>
  </li>

  <li class="active">
    <span>shipping</span>
  </li>

  <li>
    <span>payment</span>
  </li>

  <li>
    <span class="last">complete</span>
  </li>
</ol>
</div>


<div class="contact-and-email-info">
<div class="email-info">
<span class="title">contact</span>
<span class="email-address">SHAGRAWY@gmail.com</span>
<button class="prev-step">change</button>
</div>

<div class="address-info">
<span class="title">ship to</span>
<span class="shipment-address" >21 London Road, Birmingham, B1 1NG, United Kingdom</span>
<button class="prev-step">change</button>
</div>
</div>




<div class="shipping-info">

  <div class="shipping-methods">
    <h5>shipping address</h5>

    <div class="shipping-methods-container">

        <div class="shipping-method">

       <div class="custom-checkbox">
        <input type="checkbox" id="cb1">
        <label for="cb1">Evri Standard (2-3 Days)</label>
       </div>
       
          <span class="price">3$</span>
        </div>

        <div class="shipping-method">

          <div class="custom-checkbox">
           <input type="checkbox" id="cb2">
           <label for="cb2">Evri Standard (2-3 Days)</label>
          </div>
          
             <span class="price">3$</span>
        </div>

        <div class="shipping-method">

            <div class="custom-checkbox">
             <input type="checkbox" id="cb3">
             <label for="cb3">Evri Standard (2-3 Days)</label>
            </div>
            
               <span class="price">3$</span>
        </div>

        <div class="shipping-method">

              <div class="custom-checkbox">
               <input type="checkbox" id="cb4">
               <label for="cb4">Evri Standard (2-3 Days)</label>
              </div>
              
                 <span class="price">3$</span>
        </div>

        <div class="shipping-method">

                <div class="custom-checkbox">
                 <input type="checkbox" id="cb5">
                 <label for="cb5">Evri Standard (2-3 Days)</label>
                </div>
                
                <span class="price">3$</span>
        </div>

    </div>      
    
  </div>

  <div class="btn-container">
    <button class="next-step">continue to shipping            
      <i class="fa-solid fa-chevron-right"></i>  
     </button>

    <button class="prev-step">
<i class="fa-solid fa-chevron-left"></i>  
return to your bag        
    </button>
  </div>

</div>


</div>

<div class="checkout-product-info">
<div class="logo">
  <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
 <i class="fa-solid fa-signature"></i>
</a>
</div>
<div class="mobile-summary-toggler">
<button class="mobile-summary-title">

<span><i class="fa-solid fa-cart-shopping"></i></span>
<span class="title"><span>show</span><span>hide</span> order summary</span>
<span class="the-chevron"><i class="fa-solid fa-chevron-circle-down"></i></span>

</button>
<div class="price">${summaryData[1]}$</div>
</div>

<div class="checkout-cards">

 
</div>

<div class="checkout-summary">
  
  <div class="discount">

   <input type="text" class="coupon" id="coupon-input" placeholder="gift card, redemption or discount code">  
    <button>apply</button>

  </div>

  <div class="checkout-total">

    <div class="sub-total">
      <div>sub-total</div>
      <p class="price">${summaryData[1]}$</p>
    </div>

    <div class="shipping-price">
      <div>shipping</div>
      <p class="price">Calculated at next step</p>
    </div>

  </div>

  <div class="final-total">
    <div class="total-title">total</div>
    <div class="price">${summaryData[1]}$</div>
  </div>

</div>


</div>

  </div>

     <div class="terms-and-privacy">
      <a href="#">Refund Policy</a>
      <a href="#">Privacy Notice</a>
      <a href="#">Terms Of Service</a>
    </div>

   </div>  `


  let theContainer = document.querySelector(".step-3 .checkout-cards");
  dataArr.map((x) => {

    let { color, description, id, img, name, price, quantity } = x;
    theContainer.innerHTML += ` <div class="checkout-card-item">
  
        <div class="img">
          <img src="${img}" alt="">
        </div>

        <div class="card-info">
          <div class="title">${name} - <span class="color">${color}</span></div>
            
          <div class="size-and-price">
            <div class="size"> size : M</div>
            <div class="price">${price}$</div>
          </div>

          <div class="desc">${description}</div>
      
      
        </div>

      </div>`


  });


}

function renderStepFour(dataArr, summaryData) {

  mainStepsContainer.innerHTML =
    `<div class="check-out-steps step-4">

   <div class="checkout-content-container">
     
     <div class="client-info">
     
       <div class="logo">
          <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
         <i class="fa-solid fa-signature"></i>
       </a>
       </div>
     
       <div class="mobile-summary-toggler">
       </div>
     
       <div class="check-out-progress">
       <ol>
     
         <li>
           <span>Information</span>
         </li>
     
         <li>
           <span>shipping</span>
         </li>
     
         <li class="active">
           <span>payment</span>
         </li>
     
         <li>
           <span class="last">complete</span>
         </li>
       </ol>
       </div>
           
       <div class="contact-and-email-info">

       <div class="email-info">
       <span class="title">contact</span>
       <span class="email-address">SHAGRAWY@gmail.com</span>
       <button class="prev-step">change</button>
       </div>
     
       <div class="address-info">
       <span class="title">ship to</span>
       <span class="shipment-address" >21 London Road, Birmingham, B1 1NG, United Kingdom</span>
       <button class="prev-step">change</button>
       </div>

       <div class="shipping-payment-info">
       <span class="title">method</span>
       <span class="payment-info-method" >21 London Road, Birmingham, B1 1NG, United Kingdom</span>
       <button class="prev-step">change</button>
       </div>

       </div>

       <div class="step-4-payment-methods">

         <div class="title">
           <h5>payment</h5>
           <span>All transactions are secure and encrypted.</span>
         </div>

         <div class="payment-container">

           <div class="method">

             <div class="method-header">
               <div class="custom-checkbox">
                 <input type="checkbox" id="cb5">
                 <label for="cb5">Credit/Debit Card</label>
                </div>

               <div class="credit-logos">
                 <i class="fa-brands fa-cc-visa" style="color: #bdc6d6;"></i>
                 <i class="fa-brands fa-cc-discover"></i>
                 <i class="fa-brands fa-cc-amex" style="color: #16ca34;"></i>
                 
                </div>

             </div>

             <div class="method-content">

            <form action="#">

             <div class="field full-field">
               <input type="text" placeholder="card number">
               <i class="fa-solid fa-lock"></i>
             </div>

             <div class="field full-field">
               <input type="text" placeholder="name on card">
             </div>

             <div class="field half-field">
               <input type="text" placeholder="expiration date (MM / YY)">
             </div>

             <div class="field half-field">
               <input type="text" placeholder="security code">
               <i class="fa-solid fa-question question-svg"></i>
             </div>

            </form>

             </div>

           </div>

           <div class="method">

             <div class="method-header">

               <div class="custom-checkbox">
                 <input type="checkbox" id="cb6">
                 <label for="cb6">Credit/Debit Card</label>
                </div>

             </div>

             <div class="method-content d-flex flex-column align-items-center">
               <div class="credit-logo">
                 <i class="fa-regular fa-credit-card"></i>
               </div>
               <p>
                 After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>
             </div>

           </div>

           <div class="method">

             <div class="method-header">
               <div class="custom-checkbox">
                 <input type="checkbox" id="cb7">
                 <label for="cb7">Klarna - Flexible payments</label>
                </div>

               <div class="credit-logos">
                 <i class="fa-solid fa-money-check-dollar" style="color: #e137bc;"></i>
                </div>

             </div>

             <div class="method-content d-flex flex-column align-items-center">
               <div class="credit-logo">
                 <i class="fa-regular fa-credit-card"></i>
               </div>
               <p>
                 After clicking “Complete order”, you will be redirected to PayPal to complete your purchase securely.</p>
             </div>

           </div>

         </div>

       </div>

       <div class="billing-address">

         <div class="billing-address-header">
           <h5>Billing address</h5>
           <span>Select the address that matches your card or payment method.</span>
         </div>

         <div class="billing-address-content-container">

           <div class="method">

             <div class="method-header">

               <div class="custom-checkbox">
                 <input type="checkbox" id="cb8">
                 <label for="cb8">Same as shipping address</label>
                </div>

             </div>

           </div>

           <div class="method">

             <div class="method-header">

               <div class="custom-checkbox">
                 <input type="checkbox" id="cb9">
                 <label for="cb9">Use a different billing address</label>
                </div>

             </div>

             <div class="method-content">

               <form action="#">

                 <div class="field full-field">
                  <input type="text" placeholder="">

                   <select id="countrySelect">
                     <option value="Afghanistan">Afghanistan</option>
                     <option value="Albania">Albania</option>
                     <!-- Add more options for other countries here -->
                   </select>
                 </div>              
                 
                <div class="field half-field">
                  <input type="text" placeholder="first name">
                </div>
  
                <div class="field half-field">
                 <input type="text" placeholder="last name">
               </div>
  
                <div class="field full-field">
                  <input type="text" placeholder="address line 1">
                </div>
  
                <div class="field full-field">
                 <input type="text" placeholder="address line 2">
               </div>
  
               <div class="field full-field">
                 <input type="text" placeholder="city">
               </div>

               <div class="field full-field">
                 <input type="text" placeholder="phone">
               </div>
               </form>
  
             </div>

           </div>

         </div>


       </div>

       <div class="btn-container">
         <button class="next-step">complete order          
           <i class="fa-solid fa-chevron-right"></i>  
           <input type="submit" value="">
          </button>
   
         <button class="prev-step">
           <i class="fa-solid fa-chevron-left"></i>  
           return to shipping  
         </button>
       </div>
        
     </div>
     
     <div class="checkout-product-info">
       <div class="logo">
         <a class="brand col-1 d-flex flex-wrap align-items-center" href="#">
        <i class="fa-solid fa-signature"></i>
      </a>
      </div>
      <div class="mobile-summary-toggler">
       <button class="mobile-summary-title">
     
       <span><i class="fa-solid fa-cart-shopping"></i></span>
       <span class="title"><span>show</span><span>hide</span> order summary</span>
       <span class="the-chevron"><i class="fa-solid fa-chevron-circle-down"></i></span>
     
       </button>
       <div class="price">${summaryData[1]}$</div>
       </div>
     
       <div class="checkout-cards">
     
        
       </div>
     
       <div class="checkout-summary">
         
         <div class="discount">
     
          <input type="text" class="coupon" id="coupon-input" placeholder="gift card, redemption or discount code">  
           <button>apply</button>
     
         </div>
     
         <div class="checkout-total">
     
           <div class="sub-total">
             <div>sub-total</div>
             <p class="price">${summaryData[1]}$</p>
           </div>
     
           <div class="shipping-price">
             <div>shipping</div>
             <p class="price">Calculated at next step</p>
           </div>
     
         </div>
     
         <div class="final-total">
           <div class="total-title">total</div>
           <div class="price">${summaryData[1]}$</div>
         </div>
     
       </div>
     
     
      </div>
     
   </div>
     
   <div class="terms-and-privacy">
             <a href="#">Refund Policy</a>
             <a href="#">Privacy Notice</a>
             <a href="#">Terms Of Service</a>
   </div>
     
 </div> `


  let theContainer = document.querySelector(".step-4 .checkout-cards");
  dataArr.map((x) => {

    let { color, description, id, img, name, price, quantity } = x;
    theContainer.innerHTML += ` <div class="checkout-card-item">
  
        <div class="img">
          <img src="${img}" alt="">
        </div>

        <div class="card-info">
          <div class="title">${name} - <span class="color">${color}</span></div>
            
          <div class="size-and-price">
            <div class="size"> size : M</div>
            <div class="price">${price}$</div>
          </div>

          <div class="desc">${description}</div>
      
      
        </div>

      </div>`


  });

  renderSelectOptions();

}


document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const target = event.target;
    const title = target.closest(".mobile-summary-toggler .mobile-summary-title")
    if (title) {
      document.querySelector(".checkout-product-info .checkout-cards").classList.toggle("show");
      document.querySelector(".checkout-product-info .checkout-summary").classList.toggle("show");
      document.querySelector(".mobile-summary-toggler .the-chevron").classList.toggle("rotate");
      document.querySelector(".mobile-summary-title .title span:nth-child(1)").classList.toggle("hide");
      document.querySelector(".mobile-summary-title .title span:nth-child(2)").classList.toggle("show");

    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (event) => {
    const target = event.target;
    const summary = target.closest(".full-bag .cart-summary .check-out-help summary");
    if (summary) {
      target.classList.toggle("show");
    }
  });



  const checkboxes = document.querySelectorAll('.custom-checkbox input[type="checkbox"]');

  // Attach click event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      // Uncheck all other checkboxes
      checkboxes.forEach(otherCheckbox => {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.checked = false;
        }
      });
    });
  });

});
// first extract the data
// the create a function that call functions the render each step depending on the index and this function declare the extracted data
// in her local scope so all the others functions can access it
// each function will take img, price ,total price, element quantity as parameters


// end steps logic

document.addEventListener("keydown", (e) => {
  // console.log(e.code)
  if (e.code === "KeyZ") {
    // document.body.innerHTML = ""
    let video = `<div class="m-5 d-flex justify-content-center align-items-center the-video"><video src="Videos/Videoohat_1641083359550898185(234P).mp4" autoplay></video>
    </div>`
    document.body.innerHTML += video
    let vid = document.querySelector(".the-video video")
    vid.addEventListener("ended", () => {
      document.querySelectorAll(".the-video").forEach((e) => {
        e.remove();
      })
    })

  }
})




// #############################################################
// #############################################################
// #############################################################


// Get all checkboxes


document.addEventListener("DOMContentLoaded", function () {

  function hideAllMethodContent() {
    document.querySelectorAll('.check-out-steps.step-4 .method-content').forEach(content => {
      content.classList.remove('show');
    });
  }

  function UncheckAllCheckBoxes() {
    document.querySelectorAll('.check-out-steps.step-4 .custom-checkbox input[type="checkbox"]').forEach(checkbox => {
      checkbox.checked = false;
    });
  }


  document.addEventListener("click", function (e) {
    let method = e.target.closest('.check-out-steps.step-4 .method');
    let methodCheckBox = e.target.closest('.method-header .custom-checkbox');

    if (methodCheckBox) {
      hideAllMethodContent();
      UncheckAllCheckBoxes();

      methodCheckBox.querySelector("input[type='checkbox']").checked = true;
      let methodContent = method.querySelector('.method-content');
      methodContent.classList.toggle('show');
    }
  });

});


function renderSelectOptions() {
  const countries = [
    "Afghanistan",
    "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia",
    "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Côte d'Ivoire", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
    "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
    "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  let select = document.querySelector(".check-out-steps.step-4 .method-content select");

  countries.forEach((country) => {
    let option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    select.appendChild(option)
  });

}



// create a function that save the steps index into local storage so if the page reloaded
// the function calls and render the page that was opened













                     
