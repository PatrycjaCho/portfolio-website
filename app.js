let githubIcon = document.getElementById("githubIcon")
let linkedinIcon = document.getElementById("linkedinIcon")
let downloadButton = document.getElementById("downloadButton")

const filmflixSite = document.getElementById("filmflixSite")
const filmflixCode = document.getElementById("filmflixCode")

const budgetSite = document.getElementById("budgetSite")
const budgetCode = document.getElementById("budgetCode")

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/PatrycjaCho");
})

linkedinIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/patrycja-c-b630741b1/");
})


downloadButton.addEventListener("click", function() {

    const cv = '/files/cv.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = cv;

    downloadLink.setAttribute("download", "cv.pdf");

    downloadLink.click();
})


filmflixSite.addEventListener('click', function() {
    window.open('https://film-flix.onrender.com/', '_blank');
})

filmflixCode.addEventListener("click", function() {
    window.open("https://github.com/PatrycjaCho/FilmFlix");
})

budgetSite.addEventListener("click", function() {
    window.open("https://patriciachomiak-budgetcalculator.netlify.app/");
})

budgetCode.addEventListener("click", function() {
    window.open("https://github.com/PatrycjaCho/Budget-Calculator");
})