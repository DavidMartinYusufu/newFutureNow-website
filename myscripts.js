const button1 = document.getElementById("button1");
// const button2 = document.getElementById("button2")
// const button3 = document.getElementById("button3")

const box1 = document.getElementById("changeMe1");
// const box2 = document.getElementById("changeMe2")
// const box3 = document.getElementById("changeMe3")

box1.style.background = "green";
// box2.style.background = "purple"
// box3.style.background = "yellow"

button1.addEventListener("click", () => {
  box1.style.background = "blue";
  box1.style.display = "block";
});
    
// button1.addEventListener("mouseover", () => {
//   box1.style.background = "blue";
//   box1.style.display = "block";
// });

button1.addEventListener("mouseleave", () => {
  box1.style.background = "blue";
  box1.style.display = "none";
});

box1.addEventListener("mouseover", () => {
    box1.style.display = "block"
  })

box1.addEventListener("mouseleave", () => {
    box1.style.display = "none"
})


// button2.addEventListener("click", () => {
//     box2.style.background = "blue"
// })

// button3.addEventListener("click", () => {
//     box3.style.background = "blue"
// })
