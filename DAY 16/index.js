const smallCups = document.querySelectorAll(".cup__small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
    cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
    if (
        smallCups[index].classList.contains("full") &&
        !smallCups[index].nextElementSibling.classList.contains("full")
    ) {
        index--;
    }

    smallCups.forEach((cup, ind) => {
        if (ind <= index) {
            cup.classList.add("full");
        } else {
            cup.classList.remove("full");
        }
    });
}
