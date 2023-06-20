let githubIcon = document.getElementById("githubIcon")
let linkedinIcon = document.getElementById("linkedinIcon")
let downloadButton = document.getElementById("downloadButton")

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/PatrycjaCho");
})

linkedinIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/patrycja-c-b630741b1/");
})


downloadButton.addEventListener("click", function() {

    const cv = '/docs/cv.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = cv;

    downloadLink.setAttribute("download", "cv.pdf");

    downloadLink.click();
})