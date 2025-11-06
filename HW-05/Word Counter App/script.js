const textArea = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clear-btn");

textArea.addEventListener("input", () => {
  const text = textArea.value.trim();

  charCount.textContent = text.length;

   const words = text.split(/\s+/).filter((word) => word.length > 0);
   wordCount.textContent = words.length;
});

clearBtn.addEventListener("click", () => {
  textArea.value = "";
  charCount.textContent = 0;
  wordCount.textContent = 0;
});
