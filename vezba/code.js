// let breakfast = document.querySelector(".orderone");
// let breakfastButton = document.getElementById("breakfastButton");
// let lunch = document.querySelector(".ordertwo");
// let lunchButton = document.getElementById("lunchButton");
// let shake = document.querySelector(".shake");
// let shakeButton = document.getElementById("shakeButton");

// // let showShakes = false;
// function getShakes() {
//     // if (showShakes) {
//     for (let i = 0; i < breakfast.children.length; i++) {
//         if (breakfast.children[i].className != "shake") {
//             breakfast.children[i].style.display = "grid";
//         }
//     }
//     for (let i = 0; i < lunch.children.length; i++) {
//         if (lunch.children[i].className != "shake") {
//             lunch.children[i].style.display = "grid";
//         }
//     }
//     // }
//     // showShakes = false;
// }

// function getAll() {
//     if (breakfast.style.display === "none") {
//         breakfast.style.display = "flex";
//     }
//     if (lunch.style.display === "none") {
//         lunch.style.display = "flex";
//     }
//     getShakes()
// };

// breakfastButton.addEventListener('click', function () {
//     breakfast.style.display = 'none';
//     if (lunch.style.display === "none") {
//         lunch.style.display = "flex";
//     }
//     getShakes()
// });
// lunchButton.addEventListener('click', function () {
//     lunch.style.display = 'none';
//     if (breakfast.style.display === "none") {
//         breakfast.style.display = "flex";
//     }
//     getShakes()
// });

// console.log(lunch);
// console.log(breakfast);

// shakeButton.addEventListener('click', function () {
//     if (breakfast.style.display === "none") {
//         breakfast.style.display = "flex";
//     }
//     if (lunch.style.display === "none") {
//         lunch.style.display = "flex";
//     }
//     for (let i = 0; i < breakfast.children.length; i++) {
//         if (breakfast.children[i].className != "shake") {
//             breakfast.children[i].style.display = "none";
//         }
//     }
//     for (let i = 0; i < lunch.children.length; i++) {
//         if (lunch.children[i].className != "shake") {
//             lunch.children[i].style.display = "none";
//         }
//     }
//     // showShakes = true;
// })

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;

}
