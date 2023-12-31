const githubIcon = document.getElementById("githubIcon")
const linkedinIcon = document.getElementById("linkedinIcon")
const downloadButton = document.getElementById("downloadButton")
const filmflixSite = document.getElementById("filmflixSite")
const filmflixCode = document.getElementById("filmflixCode")
const budgetSite = document.getElementById("budgetSite")
const budgetCode = document.getElementById("budgetCode")

githubIcon.addEventListener("click", () => {
    window.open("https://github.com/PatrycjaCho");
})

linkedinIcon.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/patrycjachomiak/");
})


downloadButton.addEventListener("click", function() {

    const cv = '/files/Patrycja-Chomiak-CV.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = cv;

    downloadLink.setAttribute("download", "/files/Patrycja-Chomiak-CV.pdf");

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