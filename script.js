//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const outputDiv = document.getElementById("output");
    
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    new Promise(resolve => {
        setTimeout(() => resolve([1, 2, 3, 4]), 3000);
    })
    .then(numbers => {
        return delay(1000).then(() => {
            const evens = numbers.filter(num => num % 2 === 0);
            outputDiv.innerText = evens.join(",");
            return evens;
        });
    })
    .then(evens => {
        return delay(2000).then(() => {
            const multiplied = evens.map(num => num * 2);
            outputDiv.innerText = multiplied.join(",");
        });
    });
});