function convertToDays() {
    let age = document.getElementById("ageInput").value;

    if (isNaN(age) || age < 0) {
        alert("Please enter a valid age.");
        return;
    }

    let days = age * 365;
    let resultElement = document.getElementById("result");
    resultElement.innerText = `You are approximately ${days} days old! 🎉`;
}
