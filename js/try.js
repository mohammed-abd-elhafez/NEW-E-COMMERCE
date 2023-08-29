// let example = document.querySelector(".example");
// // let click = document.querySelector(".click-li")
// example.addEventListener("click", () => {
//     example.classList.toggle("click");
// })






// /*
// lets break the logic of this accordion
// first : we will add an click event on the container
// second : we will check for the closest `accordion-panel` for the click and store it in a variable to use to get the child
//  elements in it
// third : if the click not in accordion we it will return nothing
// fifth : we will pass our clicked element to a function as an argument 
// sixth : this function get the button in the clicked element then we will get the attribute in the button and store it in a variable
// and in our case it called `activePanelIsOpened` we will an easy condition 

// */



// const accordion = document.querySelector(".accordion");

// accordion.addEventListener("click", (e) => {
//     const activePanel = e.target.closest(".accordion-panel");
//     if (!activePanel) return;
//     toggleAccordion(activePanel);
// });

// function toggleAccordion(panelToActivate) {
//     const activeButton = panelToActivate.querySelector("button");
//     const activePanel = panelToActivate.querySelector(".accordion-content");
//     const activePanelIsOpened = activeButton.getAttribute("aria-expanded");
//     if (activePanelIsOpened === "true") {
//         panelToActivate.querySelector("button").setAttribute("aria-expanded", false);

//         panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", true);
//     } else {
//         panelToActivate.querySelector("button").setAttribute("aria-expanded", true);

//         panelToActivate
//             .querySelector(".accordion-content")
//             .setAttribute("aria-hidden", false);
//     }
// }


// let clickMe = document.querySelector("h2.title button");
// let theContent = document.querySelector(".drop-down-content");

// clickMe.addEventListener("click", () => {

//     setAttribute();

// });

// function setAttribute() {
//     let theContentAttribute = theContent.getAttribute("aria-hidden");
//     console.log(theContentAttribute)

//     if (theContentAttribute === "true") {
//         theContent.setAttribute("aria-hidden", "false");
//         // theContentAttribute = "false"
//     } else {
//         theContent.setAttribute("aria-hidden", "true");
//         // theContentAttribute = "true"

//     }
// };

// document.addEventListener("click", e => {
//     const isDropDownButton = e.target.matches("[data-dropdown-button]");
//     console.log(isDropDownButton)
//     if (!isDropDownButton && e.target.closest("[data-dropdown-button]") != null) return
//     let currentDropDown;
//     if (isDropDownButton) {
//         currentDropDown = e.target.closest("[data-dropdown]")
//         // currentDropDown.classlist.add("active")
//         currentDropDown.classList.toggle("active")
//     }
//     console.log(currentDropDown)
//     document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
//         console.log(dropdown)
//         if (dropdown === currentDropDown) return
//         dropdown.classList.remove("active")
//     })

// })

// // --------------------------------------------

// // Extracted function to handle toggling the dropdown
// function toggleDropdown(dropdown) {
//     dropdown.classList.toggle("active");
//   }

//   // Extracted function to handle closing other active dropdowns
//   function closeOtherDropdowns(currentDropdown) {
//     document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
//       if (dropdown !== currentDropdown) {
//         dropdown.classList.remove("active");
//       }
//     });
//   }

//   // Event listener function
//   document.addEventListener("click", (e) => {
//     const isDropDownButton = e.target.matches("[data-dropdown-button]");
//     const currentDropDown = e.target.closest("[data-dropdown]");

//     if (isDropDownButton) {
//       toggleDropdown(currentDropDown);
//       closeOtherDropdowns(currentDropDown);
//     } else if (currentDropDown !== null) {
//       return;
//     }

//     console.log(currentDropDown);
//   });
// console.log("hello")

// document.addEventListener("mouse", e => {
//   e.target.matches(".text ") ? console.log(true) : false;
// })




// // **********************************************************************************************


// console.log(window.navigator)
// function isPhone() {
//     return /iPhone|android/i.test(navigator.userAgent);
// };

// function isPc() {
//     return !isPhone;
// }

// console.log(isPhone())
// console.log(isPc());


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];

//     }
//     return array;
// }

// console.log(`shuffle is ${shuffleArray(array)}`)


// // hello world im mohammed abd elhafez and im a front end web developer
// // and im currently making a big project to learn and im going to learn react.js framework

// let fe = [1, 2, 3, 4, 5, 6, 7]
// function shuffle(arr) {
//     for (let i = arr.length; i > 0; i--) {
//         let a = Math.floor(Math.random() * (i + 1));
//         [arr[i], arr[a]] = [arr[a], arr[i]];
//     }
//     return arr
// }

// console.log(shuffle(fe))


// **************************************************************************************************
// fetch("json.json")
// .then(resolve => resolve.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     // If successful:
//     resolve("Data fetched successfully");
//     // If error:
//     reject("Error occurred while fetching data");
// });
// myPromise.then((data) => {
//     console.log(data); // Output: "Data fetched successfully"
// }).catch((error) => {
//     console.log(error); // Output: "Error occurred while fetching data"
// });

// async function fetchData() {
//     try {
//         const response = await fetch("json.json");
//         const data = await response.json();
// // console.log(data[0])
//     } catch {
//         alert('Something went wrong!');
//         console.log(alert)
//     }
// }
// fetchData(








// **************************************************************************************************


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

        // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //   currentlyActiveAccordionItemHeader.classList.toggle("active");
        //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});
// **************************************************************************************************

let contentContainer = document.querySelectorAll(".content-container");

for (let i = 0; i < contentContainer.length; i++) {
contentContainer[i].addEventListener("click", function () {
    this.classList.toggle("active")

})
}