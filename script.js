const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const result = document.getElementById("result");



const checkIfPalindrome = () => {
  const input = inputText.value;
  if(!input){
    alert("Please input a value");
    return;
  }
  const triminput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversed = triminput.split("").reverse().join("");
  
  if(triminput == reversed){
    result.classList.remove("hidden")
    result.innerText = `${input} is a palindrome`;
  }else{
    result.classList.remove("hidden")
    result.innerText = `${input} is not a palindrome`;

  }

}


checkButton.addEventListener("click", checkIfPalindrome)
