
let sixSteps = document.querySelectorAll('div.image');
let imageOfSteps = document.querySelectorAll('img.imageOfSteps');
let sixStepsContainer = document.querySelector('div.main-6-level');
let mainLightBox = document.querySelector('div.lightboxContainer');
let spanClose = document.querySelector('span.fixed-close');
let spanCloseAll = document.querySelector('span.closeLightboxContainer');
// console.log(sixStepsContainer);

let mainArray = [
  {identitiy: 'image flecken', src: 'teppisch-images/Flecken-entfernen/flecken-1.jpeg'},
  {identitiy: 'image flecken', src: 'teppisch-images/Flecken-entfernen/flecken-2.jpeg'},
  {identitiy: 'image flecken', src: 'teppisch-images/Flecken-entfernen/flecken-3.jpeg'},
  {identitiy: 'image flecken', src: 'teppisch-images/Flecken-entfernen/flecken-4.jpeg'},

  {identitiy: 'image reparatur', src: 'teppisch-images/Reparatur/reparatur1.jpeg'},
  {identitiy: 'image reparatur', src: 'teppisch-images/Reparatur/reparatur2.jpeg'},
  {identitiy: 'image reparatur', src: 'teppisch-images/Reparatur/reparatur3.jpeg'},
  {identitiy: 'image reparatur', src: 'teppisch-images/Reparatur/reparatur4.jpeg'},

  {identitiy: 'image wash', src: 'teppisch-images/Wäscherei/wash1.jpeg'},
  {identitiy: 'image wash', src: 'teppisch-images/Wäscherei/wash2.jpeg'},
  {identitiy: 'image wash', src: 'teppisch-images/Wäscherei/wash3.jpeg'},
  {identitiy: 'image wash', src: 'teppisch-images/Wäscherei/wash4.jpeg'}
];
// console.log(imageOfSteps[1].src);

for (let i=0; i<sixSteps.length; i++) {

  sixSteps[i].addEventListener('click', function(ev) {
    let targetIdentifier = ev.currentTarget.className;
    mainLightBox.style.display= 'block';
    sixStepsContainer.style.display='none';


    // console.log(targetIdentifier);

    let filterImages = mainArray.filter(elem => elem.identitiy === targetIdentifier);
    // console.log(filterImages);
    for (j=0; j<filterImages.length; j++) {
      imageOfSteps[j].src = filterImages[j].src;
    }
  })
}

// adding span as closing button
spanClose.addEventListener('click', function() {
  mainLightBox.style.display= 'none';
})

spanCloseAll.addEventListener('click', function() {
  mainLightBox.style.display= 'none';
})

// starting lightbox ###############################################################
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}



// let fleckenArray = [
//   {src: 'teppisch-images/Flecken-entfernen/flecken-1.jpeg'},
//   {src: 'teppisch-images/Flecken-entfernen/flecken-2.jpeg'},
//   {src: 'teppisch-images/Flecken-entfernen/flecken-3.jpeg'},
//   {src: 'teppisch-images/Flecken-entfernen/flecken-4.jpeg'}
// ];
// console.log(imageOfSteps[1].src);
//
// for (let i=0; i<sixSteps.length; i++) {
//
//   sixSteps[i].addEventListener('click', function() {
//
//       for (let j=0; j<fleckenArray.length; j++) {
//         imageOfSteps[j].src = fleckenArray[j].src;
//       }
//   })
// }
