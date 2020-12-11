//---------------- type writer effect ----------------//
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff;}";
        document.body.appendChild(css);
    };

//---------------- transparent navbar effect ----------------//
window.addEventListener('scroll', function(){
            var header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        function toggleMenu(){
            var menuToggle = document.querySelector('.toggle');
            var menu = document.querySelector('.menu');
            menuToggle.classList.toggle('active')
            menu.classList.toggle('active')
        }

//---------------- read more - read less effect [not used yet] ----------------//
function myFunction() {
          
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");


          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "View more &raquo;"; 
            moreText.style.display = "none";

          } else {
            dots.style.display = "none";
            btnText.innerHTML = "View less &laquo"; 
            moreText.style.display = "inline";
          }

        }
