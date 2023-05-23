function downloadResume() {
    var link = document.createElement("a");
    link.href = "./assets/Resume_Jin.pdf";
    link.download = "Resume_Jin.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }