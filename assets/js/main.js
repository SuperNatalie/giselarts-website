var simpleSlides = function (options) {
    var Slideshow = {
      init: function (options) {
        this.count = 0;
        this.slides = document.querySelectorAll(".slides");
        this.numslides = this.slides.length;
        options = options || {};
        this.opts = {
          speed:(typeof options.speed === "undefined") ? 8600 : options.speed,
          animate:(typeof options.animate === "undefined") ? "animate-bottom" : options.animate
        }
        this.slides[0].classList.add(this.opts.animate);
        this.autoCycle(this.opts.speed)
      },
      showSlide: function (i) {
        if (i>0) {
          this.count = (this.count + 1 === this.numslides) ? 0 : this.count + 1;
        } else {
          this.count = (this.count -1 < 0) ? this.numslides - 1 : this.count - 1;
        }
        document.querySelector("." + this.opts.animate).classList.remove(this.opts.animate);
        this.slides[this.count].classList.add(this.opts.animate);
      },
      autoCycle: function (speed) {
        var that = this,
        interval = window.setInterval (function () {
          that.showSlide(1);
        },speed);
      }
    }
    var slideshow = Object.create(Slideshow);
    slideshow.init(options); 
  }
  
  var opts = {
    speed: 80000,
    animate: "animate-top"
  }
  simpleSlides(opts);

  // speed verändert intervallzeit




/* Menschen von Meine Kunst Unterseite */

var slideIndex = 1 ;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}