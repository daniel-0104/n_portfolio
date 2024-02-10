const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
});

const body = document.querySelector('body');
const darkmodeIcon = document.querySelector('#darkmode-icon');
const formControl = document.querySelector('#form-control');
darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bi-sun-fill');
    body.classList.toggle('light');
    formControl.classList.toggle('form-control-dark');
};

window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoints = 140;

    if(revealtop < windowheight - revealpoints){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active');
    }
  }
}

let textContent = document.getElementsByClassName('text-content');
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
let currentDetails = 0;
function detailsClick(event,elementId){
  event.preventDefault();
  const clickText = event.target;

  if(clickText.classList.contains('text-active')){
    return;
  }
  for(let d of textContent){
    d.classList.remove('text-active');
  }
  clickText.classList.add('text-active');
  currentDetails = Array.from(textContent).indexOf(clickText);

  skills.style.display = elementId === 'skills' ? 'flex' : 'none';
  experience.style.display = elementId === 'experience' ? 'block' : 'none';
}

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    770: {
        slidesPerView: 2,
    },
    1000: {
        slidesPerView: 3,
    }
  }
});


function sendEmail(event) {
  event.preventDefault();
    if( document.getElementById('name').value != "" && document.getElementById('phone').value != "" && 
        document.getElementById('email').value != "" && document.getElementById('message').value != "") 
    {
        let params = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            message:document.getElementById('message').value
        };

        var phonePattern = /^(09|\+959)\d{9}$/;
        if (!phonePattern.test(params.phone)) {
          alert("Please enter a valid phone number");
          return;
        }

        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(params.email)) {
            alert("Please enter a valid email address");
            return;
        }

        emailjs.send("service_os3ctl7","template_dxcqnqf",params)
        .then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('email').value = "";
            document.getElementById('message').value = "";
            alert("Your message has been sent successfully . Status code : " + res.status);
        });
    }   
    else 
    {
      alert("please fill all information!!!");
    }
}

const downloadButton = document.getElementById('download');
downloadButton.addEventListener('click', function() {
    alert('Looking Forward To Hearing From You Soon...');
});