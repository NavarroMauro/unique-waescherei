
let sixSteps = document.querySelectorAll('div.image');
let imageOfSteps = document.querySelectorAll('img.imageOfSteps');
let sixStepsContainer = document.querySelector('div.main-6-level');
let carouselContainer = document.querySelector('div.myMainCarousel');
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
console.log(imageOfSteps[1].src);

for (let i=0; i<sixSteps.length; i++) {

  sixSteps[i].addEventListener('click', function(ev) {
    let targetIdentifier = ev.currentTarget.className;
    carouselContainer.style.display='block';

    // console.log(targetIdentifier);

    let filterImages = mainArray.filter(elem => elem.identitiy === targetIdentifier);
    // console.log(filterImages);
    for (j=0; j<filterImages.length; j++) {
      imageOfSteps[j].src = filterImages[j].src;
    }
  })
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
