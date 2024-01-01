const quoteBtn = document.getElementById("new-quote");
const copyBtn = document.getElementById("copy-quote");
const quoteContent = document.getElementById("quote");
const author = document.getElementById("author");

function generateQuote() {
  const url = "https://api.quotable.io/random";
  const options = { method: "GET" };

  let a = fetch(url, options);
  a.then((response) => {
    let quote = response.json();
    return quote;
  })
    .then((quote) => {
      console.log(quote.content);
      quoteContent.textContent = quote.content;
      author.textContent = `- ${quote.author}`;
      console.log("response got");
    })
    .catch(() => console.log("error occured"));
}

function copyToClipboard() {
  const textToCopy = `${quoteContent.textContent} ${author.textContent}`;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      copyBtn.textContent = "copied!";
      function copy() {
        copyBtn.textContent = "copy";
      }
      setTimeout(copy, 2000);
    })
    .catch((error) => {
      console.error("Error copying to clipboard:", error);
    });
}

copyBtn.addEventListener("click", copyToClipboard);
quoteBtn.addEventListener("click", generateQuote);
generateQuote();
