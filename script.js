const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultDisplay = document.getElementById("result");

const checkPalindrome = (statement) => {
    let ret = false;

    //get reverse of statement
    const revStatement = statement.split('').reverse().join('');

    //if statement matches then return true as we have a palindrome
    if (statement === revStatement) {
        ret = true;
    }

    return ret;
}

const displayResult = () => {
    //save text input
    const textIn = textInput.value;

    //remove all punctuation and whitespace and set to all lower case
    const string = textIn.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "").toLowerCase();
    let result = "";

    //clear result and text input
    resultDisplay.style.display = "none";
    resultDisplay.innerHTML = ""
    textInput.value = "";

    //Check we have a valid statement to check
    if (string) {
        if (checkPalindrome(string)) {
            result = " is a palindrome"
        }
        else {
            result = " is not a palindrome"
        }

        resultDisplay.style.display = "block";
        resultDisplay.innerHTML =
        `
            <div>
                <p><b>${textIn}</b>${result}</p>
            </div>
        `;
    }
    //Otherwise alert use to enter valid input
    else {
        alert("Please input a value");
    }
}

checkButton.addEventListener("click", displayResult);