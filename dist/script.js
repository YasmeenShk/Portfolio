
function toggleResume() {
  document.getElementById("resumeMenu").classList.toggle("hidden");
}

//typing text
const words = ["Software Developer","Frontend Developer","Web Designer"];
let w=0,c=0,d=0;
const span = document.querySelector(".typing-text span");

setInterval(()=>{
  span.textContent = words[w].slice(0,c+=d? -1:1);
  if(c == words[w].length+1) d=1;      
  if(c == 0){ d=0; w=(w+1)%words.length;} 
},120);

// project scroll
function scrollProjects(value){
  document.getElementById("projectsSlider").scrollBy({
    left: value,
    behavior: "smooth"
  });
}

// contact form
(function(){
  emailjs.init("rTCsacf4Y1R5pIZe1");
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm(
    "service_jk1uwqs",
    "template_ndrwt3t",
    this
  ).then(function(){
    alert("Message sent successfully!");
  }, function(error){
    alert("Failed to send message");
    console.log(error);
  });
});



