const memeImg = document.getElementById("meme");
const generateBtn = document.getElementById("generate");
const languageToggleBtn = document.getElementById("language-toggle");
let language = "en"; // Default language

async function fetchMeme() {
  try {
    let apiUrl;
    if (language === "en") {
      apiUrl = "https://meme-api.com/gimme";
    } else {
      apiUrl =
        "https://api.tenor.com/v1/random?q=bengali+memes&key=LIVDSRZULELA&limit=1";
    }

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (language === "en") {
      memeImg.src = data.url;
    } else {
      memeImg.src = data.results[0].media[0].gif.url;
    }
  } catch (error) {
    console.error("Error fetching meme:", error);
  }
}

generateBtn.addEventListener("click", fetchMeme);

languageToggleBtn.addEventListener("click", () => {
  language = language === "en" ? "bn" : "en";
  languageToggleBtn.textContent =
    language === "en" ? "Switch to Bengali" : "Switch to English";
  fetchMeme();
});

fetchMeme(); // Load an initial meme
