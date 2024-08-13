const titles = ["A Frontend Developer", "A Graphic Designer", "A Pro Forex Trader"];
let index = 0;

function changeTitle() {
    const titleElement = document.getElementById("dynamic-title");
    titleElement.textContent = titles[index];
    index = (index + 1) % titles.length; // loop through the array
}

// Change title every 2 seconds (2000 milliseconds)
setInterval(changeTitle, 2000);
