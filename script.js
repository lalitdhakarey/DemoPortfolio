let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");

let github=document.getElementById("git");
let linkedin=document.getElementById("linkedin");
let insta=document.getElementById("insta");
let twitter=document.getElementById("twitter");



menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
}

github.onclick=()=>{
    window.open("https://github.com/lalitdhakarey");
}
linkedin.onclick=()=>{
    window.open("https://www.linkedin.com/in/lalit-dhakarey-75124427b/");
}
insta.onclick=()=>{
    window.open("https://www.instagram.com/");
}
twitter.onclick=()=>{
    window.open("https://www.x.com/");
}

const jobTitles=["Web Developer", "UI/UX Designer", "Video Editor"];
let currTitle=0;
function changeJobTitle(){
    const job=document.getElementById("job-title");
    job.textContent=jobTitles[currTitle];
    currTitle=(currTitle+1)%jobTitles.length;
}
setInterval(changeJobTitle,1500);

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this); 
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Your message has been sent!');
            this.reset(); 
        } else {
            alert('There was a problem sending your message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your message.');
    });
});