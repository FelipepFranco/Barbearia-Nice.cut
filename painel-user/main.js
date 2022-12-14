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

 