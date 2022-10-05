const hideAbout = document.getElementById("hideAbout");
const aboutMe = document.getElementById("aboutMe")

aboutMe.addEventListener("mouseover", function handelMouseOver(){
    hideAbout.style.display= "block";
})

aboutMe.addEventListener("mouseout", function handelMouseout(){
    hideAbout.style.display = "none"
})

const contact = document.getElementById("contact");
const hidecontact = document.getElementById("hideContact");

contact.addEventListener("mouseover", function handelMouseOver1(){
    hidecontact.style.display = "block";
})

contact.addEventListener("mouseout", function handelMouseOver1(){
    hidecontact.style.display = "none";
})

const projects = document.getElementById("projects");
const hideProjects = document.getElementById("hideProjects");

projects.addEventListener("mouseover", function handelMouseOver1(){
    hideProjects.style.display = "block";
})

projects.addEventListener("mouseout", function handelMouseOver1(){
    hideProjects.style.display = "none";
})