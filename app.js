const body = document.querySelector("body")
const thank_you = document.getElementById("thank-you")
thank_you.style.visibility = "collapse";
const rating = document.getElementById("rating")

let choice = document.getElementById("choice");

choice.addEventListener('click', function onClick(color) {
  color.target.style.backgroundColor = "hsl(25, 97%, 53%)";
  color.target.style.color = "white";
});

let options = [...document.getElementById("choice").children]

for (let option of options) {
    option.addEventListener("click", () => {
        choice = option.textContent
    })
}

document.getElementById("submit").addEventListener("click", () => { 
    if (choice.length !== 0) {
        rating.style.visibility = "collapse";
        
        const span = document.getElementById("selected").children[0];
        span.innerHTML = choice;
        thank_you.style.visibility = "visible";
    }
   })