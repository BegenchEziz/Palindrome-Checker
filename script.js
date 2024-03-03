
const textInput = document.getElementById("text-input");
const button1 = document.getElementById("check-btn");
const result = document.getElementById("result");


button1.addEventListener("click", ()  => {
  if (textInput.value === "") {
    alert("Please input a value");
  } else {
    const originalText = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
    const reverseText = originalText
    .split("")
    .reverse()
    .join("");

    palChecker(originalText, reverseText, textInput.value);
  }
})

const palChecker = (lowerOr, reverse, original) => {
  if (lowerOr === reverse) {
    result.textContent = `${original} is a palindrome`;
    return true;
  } else {
    result.textContent = `${original} is not a palindrome`;
    return false;
  }
}