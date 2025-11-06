const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");
const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/|~";


generateBtn.addEventListener('click',()=>{
    const length = parseInt(lengthEl.value);

    let chars = ""

    if(lowercaseEl.checked) chars += lowercaseEl;
    if (uppercaseEl.checked) chars += uppercaseEl;
    if (numbersEl.checked) chars += numbersEl;
    if (symbolsEl.checked) chars += symbolsEl;

    if(chars === ""){
        result.value = "Select at least one option!";
        return;
    }

    let password = "";

    for(i = 0; i < length; i++){
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }

    result.value = password;

});

copyBtn.addEventListener('click',()=>{
    if(!result.value) return;

    navigator.clipboard.writeText(result.value);
    copyBtn.textContent = "Copied";

    setTimeout(() => {
        copyBtn.textContent = "Copy"
    }, 1000);
});

clearBtn.addEventListener('click',()=>{
    result.value = "";
    copyBtn.textContent = 'Copy';
    lengthEl.value = "";
})