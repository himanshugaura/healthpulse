
let images = [
    "url(abhishekUpmanyu.jpg)" , "url(samAltman.jpg)" , "url(ankitBaiyanpuria.jpg)" , "url(ranveerAllahbadia.jpg)" , "url(dhruvRathee.jpg)" 
]

let clients = [
    "Abhishek Upmanyu" , "Sam Altman" , "Ankit Baiyanpuria" , "Ranveer Allahbadia" , "Dhruv Rathee"
]

let reviews = [
    "Offers diverse health products. Effective fitness programs cater to various fitness levels. Great customer services but limited products range.",
    "Exceptionnal health products and premium fitness programs. Empowering transformations backed by top-notch customer care.",
    "Ram Ram Bhai Sare Ne! Innovative health products that deliver noticeable benefits. Well-designed fitness programs empower users.",
    "Experienced trainers lead engaging fitness programs, fostering remarkable user transformations and satisfaction.",
    "Namaskar Dosto! Knowledgeable faculties and their attentive service and expert guidance elevate user experiences, fostering optimal health.",
]

let profile = document.getElementsByClassName("profile");
let outReview = document.getElementsByClassName("review");
let names = document.getElementsByClassName("name");

for (i = 0; i < clients.length; i++) {
    
   profile[i].style.backgroundImage = images[i];
   outReview[i].innerHTML = reviews[i];
   names[i].innerHTML = clients[i];
}