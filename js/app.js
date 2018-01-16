(function() {
  var theImages = document.querySelectorAll('.imageGallery'),
    appliedClass;

    function changeElements() {

      let objectIndex = dynamicContent[this.id];

    theImages.forEach(function(element, index) {

      element.addEventListener('click', changeElements, false);
    });

    function popLightbox(currentIndex, currentObject) {
      debugger;

      window.scrollTo(0, 0);

      let lightbox = document.querySelector('.lightbox');
      let lightboxImg = lightbox.querySelector('images');
      let lightboxDesc = lightbox.querySelector('p');
      let closeLightbox = lightbox.querySelector('.close-lightbox');

      lightboxImg.src = "images/" + currentObject.images[currentIndex];
      lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

      lightbox.style.display = "block";

      closeLightbox.addEventListener('click', closeBox, true);
    }

      function closeBox() {

      }

    changeElements.call(document.querySelector('#spring'));

})();
