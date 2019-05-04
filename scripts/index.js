

  let sixSteps = document.querySelectorAll('div.image');
  let imageOfSteps = document.querySelectorAll('img.img-hover');
  let sixStepsContainer = document.querySelector('div.main-6-level');
  let mainLightBox = document.querySelector('div.lightboxContainer');
  let spanClose = document.querySelector('span.fixed-close');
  let spanCloseAll = document.querySelector('span.closeLightboxContainer');
  let bigImages = document.querySelectorAll('img.bigImages');
  let repairPicturesArray = document.querySelectorAll('div.carousel-flex-image img');
  let fleckenPicturesArray = document.querySelectorAll('div.carousel-flex-image-flecken img');
  let justCarouselPartContainer = document.querySelector('div.carousel-container');
  let justCarouselPartContainerFlecken = document.querySelector('div.carousel-container-flecken');
  let justCarouselPartImages = document.querySelectorAll('div.carouselPart img');
  let justCarouselImages = document.querySelectorAll('div.image-container img');
  let justCarouselFleckenImages = document.querySelectorAll('div.image-container-flecken img');
  let carouselRemover = document.querySelector('span.remove-carousel');
  let carouselRemoverFlecken = document.querySelector('span.remove-carousel-flecken');
  let spanMehr = document.querySelector('span.mehr');
  let spanMehrFlecken = document.querySelector('span.mehr-flecken');
  let paragraphMehr = document.querySelector('p.showMehr');
  let paragraphMehrFlecken = document.querySelector('p.showMehr-flecken');
  let prevArrow = document.querySelector('a.prev-arrow');
  let arrows = document.querySelectorAll('a.arrow span');
  let imageContainerFelecken = document.querySelectorAll('div.image-container-flecken');
  let counter=1;


  let mainArray = [
    {identitiy: 'image flecken', src: 'images/teppisch-images/staub/staub1.jpeg'},
    {identitiy: 'image flecken', src: 'images/teppisch-images/staub/staub2.jpeg'},
    {identitiy: 'image flecken', src: 'images/teppisch-images/staub/staub3.jpeg'},
    {identitiy: 'image flecken', src: 'images/teppisch-images/staub/staub4.jpeg'},

    {identitiy: 'image reparatur', src: 'images/teppisch-images/sorg/sorg1.jpeg'},
    {identitiy: 'image reparatur', src: 'images/teppisch-images/sorg/sorg2.jpeg'},
    {identitiy: 'image reparatur', src: 'images/teppisch-images/sorg/sorg3.jpeg'},
    {identitiy: 'image reparatur', src: 'images/teppisch-images/sorg/sorg4.jpeg'},

    {identitiy: 'image sauna', src: 'images/teppisch-images/teppich-sauna/sauna1.jpeg'},
    {identitiy: 'image sauna', src: 'images/teppisch-images/teppich-sauna/sauna2.jpeg'},
    {identitiy: 'image sauna', src: 'images/teppisch-images/teppich-sauna/sauna3.jpeg'},
    {identitiy: 'image sauna', src: 'images/teppisch-images/teppich-sauna/sauna4.jpeg'},

    {identitiy: 'image kontrolle', src: 'images/teppisch-images/ende-kontrolle/ende-kontrolle1.jpeg'},
    {identitiy: 'image kontrolle', src: 'images/teppisch-images/ende-kontrolle/ende-kontrolle2.jpeg'},
    {identitiy: 'image kontrolle', src: 'images/teppisch-images/ende-kontrolle/ende-kontrolle3.jpeg'},
    {identitiy: 'image kontrolle', src: 'images/teppisch-images/ende-kontrolle/ende-kontrolle4.jpeg'},

    {identitiy: 'image wash', src: 'images/teppisch-images/scleudern/scleudern1.jpeg'},
    {identitiy: 'image wash', src: 'images/teppisch-images/scleudern/schleudern2.jpeg'},
    {identitiy: 'image wash', src: 'images/teppisch-images/scleudern/schleudern3.jpeg'},
    {identitiy: 'image wash', src: 'images/teppisch-images/scleudern/schleudern4.jpeg'},

    {identitiy: 'image lieferung', src: 'images/teppisch-images/lieferung/lieferung1.jpg'},
    {identitiy: 'image lieferung', src: 'images/teppisch-images/lieferung/lieferung2.jpg'},
    {identitiy: 'image lieferung', src: 'images/teppisch-images/lieferung/lieferung3.jpg'},
    {identitiy: 'image lieferung', src: 'images/teppisch-images/lieferung/lieferung4.jpg'}
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

  // bigImage Click
  for (let k=0; k<imageOfSteps.length; k++) {
    imageOfSteps[k].addEventListener('click', function(event) {

      for (let t=0; t<imageOfSteps.length; t++) {
        // smallImages[t].src=imageOfSteps[t].src;
      }

      for (let z=0; z<imageOfSteps.length; z++) {
        bigImages[z].src=imageOfSteps[z].src;
      }
      // smallImages[k].src=`${event.currentTarget.src}`;

    })
  }

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
    // dots[slideIndex-1].className += " active";
  }


// carouselPicturesContainer and just carousel section
  for (let i=0; i<repairPicturesArray.length; i++) {
    repairPicturesArray[i].addEventListener('click', ev => {
      justCarouselPartContainer.style.display= 'block';
      justCarouselImages[0].src=ev.target.src;
    })
  }

  carouselRemover.addEventListener('click', event => {
    justCarouselPartContainer.style.display= 'none';
  })

  spanMehr.addEventListener('click', event => {
    paragraphMehr.style.display= 'block';
    spanMehr.style.display= 'none';
  })

  paragraphMehr.addEventListener('click', event => {
    spanMehr.style.display= 'block';
    paragraphMehr.style.display= 'none';
  })





  // flecken part ############################
  for (let i=0; i<fleckenPicturesArray.length; i++) {
    fleckenPicturesArray[i].addEventListener('click', ev => {
      justCarouselPartContainerFlecken.style.display= 'block';
      // justCarouselFleckenImages[0].src=ev.target.src;
    })
  }


  for (let i=0; i<arrows.length; i++) {

    arrows[i].addEventListener('click', ev => {
      for (let j=0; j<imageContainerFelecken.length; j++) {
        imageContainerFelecken[j].style.opacity='0';
      }

      let ident=ev.target.getAttribute('ident');
      if (ident==='next') {
        imageContainerFelecken[counter].style.opacity='1';
        counter++;
        if (counter>5) {
          counter=0;
        }
      } else {
        counter--;
        if (counter<0) {
          counter=5;
        }
        imageContainerFelecken[counter].style.opacity='1';
      }
      console.log(counter);
    })
  }


  carouselRemoverFlecken.addEventListener('click', event => {
    justCarouselPartContainerFlecken.style.display= 'none';
  })

  spanMehrFlecken.addEventListener('click', event => {
    paragraphMehrFlecken.style.display= 'block';
    spanMehrFlecken.style.display= 'none';
  })

  paragraphMehrFlecken.addEventListener('click', event => {
    spanMehrFlecken.style.display= 'block';
    paragraphMehrFlecken.style.display= 'none';
  })
