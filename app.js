// variables
const submit = document.getElementById("submit");
const headline = document.getElementById('headline');
const text = document.getElementById('text');
const star = document.getElementById('star');
const thankYou = document.getElementById('thankyou');
const selected = document.getElementById('selected');
let madeChoice = false;
// choice will be determined by the rating, so a rating of 1 will be choice = 1
let choice = 0;
// rating buttons
const circles = document.querySelectorAll(".circle");
const ratings = document.getElementById("ratings");
document.getElementById("rating-1").addEventListener("click", () => {
    selected.innerHTML = "You selected 1 out of 5"
})
document.getElementById("rating-2").addEventListener("click", () => {
    selected.innerHTML = "You selected 2 out of 5"
})
document.getElementById("rating-3").addEventListener("click", () => {
    selected.innerHTML = "You selected 3 out of 5"
})
document.getElementById("rating-4").addEventListener("click", () => {
    selected.innerHTML = "You selected 4 out of 5"
})
document.getElementById("rating-5").addEventListener("click", () => {
    selected.innerHTML = "You selected 5 out of 5"
})



circles.forEach(rating => {
    rating.addEventListener("click", () => {
        for(let i = 0; i < circles.length; i++) {
            circles[i].style.backgroundColor = "hsl(216, 12%, 8%)";
            circles[i].style.color = "hsl(217, 12%, 63%)";
        }
        rating.style.backgroundColor = "hsl(217, 12%, 63%)";
        rating.style.color = "white";
        madeChoice = true;
        // choice = nodes[index];
        console.log(circles[0]);
    })
})

submit.addEventListener("click", () => {
    if(madeChoice) {
    headline.innerHTML = "Thank you!";
    headline.style.textAlign = "center";
    text.innerHTML = " We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch";
    text.style.textAlign = "center";
    star.style.display = "none";
    thankYou.style.display = "flex";
    thankYou.style.justifyContent = "center";
    submit.style.display = "none";
    ratings.style.display = "none";
    selected.style.display = "flex";
    }


})

