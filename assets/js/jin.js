function downloadResume() {
    var link = document.createElement("a");
    link.href = "./assets/Resume_Jin.pdf";
    link.download = "Resume_Jin.pdf";
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