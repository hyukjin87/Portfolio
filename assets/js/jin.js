let currentLanguage = "en";



function downloadResume() {
  var link = document.createElement("a");
  let fileName = currentLanguage === "kr" ? "Resume_Jin_kr.pdf" : "Resume_Jin.pdf"; // Korean version using kr

  link.href = `./assets/${fileName}`;
  link.download = fileName;
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  }


  function toggleBubble(element) {
    var bubble = element.parentElement.querySelector(".bubble");
    bubble.style.display = "block";

    // disappear 3 sec
    setTimeout(function () {
        bubble.style.display = "none";
    }, 3000);
}

function startImageRotation(elementId, imageList, interval) {
  let index = 0;
  const element = document.getElementById(elementId);
  
  setInterval(() => {
      index = (index + 1) % imageList.length;
      element.src = imageList[index];
  }, interval);
}

// def images
const serverImages = [
  "assets/imgs/ss_hilow_1.PNG",
  "assets/imgs/ss_hilow_2.PNG",
  "assets/imgs/ss_hilow_3.PNG"
];
const radioImages = [
  "assets/imgs/ss_radio_1.PNG",
  "assets/imgs/ss_radio_2.PNG",
  "assets/imgs/ss_radio_3.PNG"
];

// call the common function
startImageRotation("serverImage", serverImages, 1000);
startImageRotation("radioImage", radioImages, 1000);



function changeLanguage(lang, text) {
  if (lang === currentLanguage) return;  // if same language no excute

  document.getElementById("selected-flag").src = `assets/imgs/flags/${lang}.png`;
  document.getElementById("selected-language").innerHTML = text;


  // load json
  fetch("assets/js/languages.json")
  .then(response => response.json())
  .then(data => {
      if (data[lang]) {
          document.querySelectorAll("[data-lang]").forEach(element => {
              let key = element.getAttribute("data-lang");
              if (data[lang][key]) {
                  element.innerHTML = data[lang][key];
              }
          });
      }

      // save current language
      currentLanguage = lang;

  })
  .catch(error => console.error("Error loading language file:", error));
}