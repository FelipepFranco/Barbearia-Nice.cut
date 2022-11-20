/* abre e fecha  o menu quando clicar no icone x e hamburguer*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*quando clicar em um item do menu, esconder o menu*/

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
  link.addEventListener('click', () =>{
    nav.classList.remove('show')
  })
}

/*EFEITO do SCROLL*/

const header = document.querySelector('#header')
const navHeigth = header.scrollHeight

function changeHeaderWhenScroll(){


  if (window.scrollY >= navHeigth){
    header.classList.add('scroll')//scroll é maior que a altura do header
  } else {
    header.classList.remove('scroll')
    // menor que a artura do header
  }

}

/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
  keyboard: true,
  
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true,

    }
  }
})

/* SCROLLREAVEL: mostrar elementos quando der scrol na página*/

const scrollReavel = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion:700,
  reset: true
})

scrollReavel.reveal(
`#home .image, #home .text,
produtos.html,
#about .image, #about .text,
#services header, #services .card,
#testimonials header,  #testimonials .testimonials,
#contact .text, #contact .links,
.swiper-scrollbar ,
footer.brand, footer.social
`,
{interval:100}
)

/*Botão voltar para o topo*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop(){

  
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  
  }
}

/*MENU ATIVO CONFORME A SEÇÃO DA PÁGINA*/
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}





/* WHEWN SCROLL*/


window.addEventListener('scroll', function(){
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})

/* CARROSSEL DA PAGINA DE PRDUTOS*/

 

/**
 * Created by Kupletsky Sergey on 05.11.14.
 *
 * Material Design Responsive Table
 * Tested on Win8.1 with browsers: Chrome 37, Firefox 32, Opera 25, IE 11, Safari 5.1.7
 * You can use this table in Bootstrap (v3) projects. Material Design Responsive Table CSS-style will override basic bootstrap style.
 * JS used only for table constructor: you don't need it in your project
 */

 $(document).ready(function() {

  var table = $('#table');

  // Table bordered
  $('#table-bordered').change(function() {
      var value = $( this ).val();
      table.removeClass('table-bordered').addClass(value);
  });

  // Table striped
  $('#table-striped').change(function() {
      var value = $( this ).val();
      table.removeClass('table-striped').addClass(value);
  });

  // Table hover
  $('#table-hover').change(function() {
      var value = $( this ).val();
      table.removeClass('table-hover').addClass(value);
  });

  // Table color
  $('#table-color').change(function() {
      var value = $(this).val();
      table.removeClass(/^table-mc-/).addClass(value);
  });
});

// jQuery’s hasClass and removeClass on steroids
// by Nikita Vasilyev
// https://github.com/NV/jquery-regexp-classes
(function(removeClass) {

jQuery.fn.removeClass = function( value ) {
  if ( value && typeof value.test === "function" ) {
    for ( var i = 0, l = this.length; i < l; i++ ) {
      var elem = this[i];
      if ( elem.nodeType === 1 && elem.className ) {
        var classNames = elem.className.split( /\s+/ );

        for ( var n = classNames.length; n--; ) {
          if ( value.test(classNames[n]) ) {
            classNames.splice(n, 1);
          }
        }
        elem.className = jQuery.trim( classNames.join(" ") );
      }
    }
  } else {
    removeClass.call(this, value);
  }
  return this;
}

})(jQuery.fn.removeClass);