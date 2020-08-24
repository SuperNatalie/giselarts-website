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
    speed: 8000,
    animate: "animate-top"
  }
  simpleSlides(opts);