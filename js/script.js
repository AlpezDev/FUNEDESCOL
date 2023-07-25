/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Educación y Desarrollo Social","Compromiso con Colombia","Progreso y Cambio","Defensores de Derechos",
                "Familia Transformando Vidas","Esperanza y Oportunidades","Transparencia y Compromiso","Comunidad Para el Futuro"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }

/** Descargar documento */
var boton = document.getElementById('descargar');

boton.onclick = function () {
    var archivo = 'docs/FUNEDESCOL.pdf';
    var enlace = document.createElement('a');

    enlace.href = archivo;
    enlace.target = '_blank';

    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
};

// Obtener los elementos de la imagen y el lightbox
var imagen1 = document.getElementById('portfolio-img-1');
var imagen2 = document.getElementById('portfolio-img-2');
var imagen3 = document.getElementById('portfolio-img-3');
var imagen4 = document.getElementById('portfolio-img-4');
var imagen5 = document.getElementById('portfolio-img-5');
var imagen6 = document.getElementById('portfolio-img-6');
var lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
var imagenLightbox = document.createElement('img');
lightbox.appendChild(imagenLightbox);
var cerrarLightbox = document.createElement('span');
cerrarLightbox.innerHTML = '&times;';
cerrarLightbox.classList.add('cerrar');
lightbox.appendChild(cerrarLightbox);
document.body.appendChild(lightbox);

// Mostrar el lightbox al hacer clic en la imagen
imagen1.addEventListener('click', function() {
  lightbox.classList.add('mostrar');
  imagenLightbox.src = this.src;
});
imagen2.addEventListener('click', function() {
    lightbox.classList.add('mostrar');
    imagenLightbox.src = this.src;
  });
  imagen3.addEventListener('click', function() {
    lightbox.classList.add('mostrar');
    imagenLightbox.src = this.src;
  });
  imagen4.addEventListener('click', function() {
    lightbox.classList.add('mostrar');
    imagenLightbox.src = this.src;
  });
  imagen5.addEventListener('click', function() {
    lightbox.classList.add('mostrar');
    imagenLightbox.src = this.src;
  });
  imagen6.addEventListener('click', function() {
    lightbox.classList.add('mostrar');
    imagenLightbox.src = this.src;
  });

// Ocultar el lightbox al hacer clic en el botón de cerrar
cerrarLightbox.addEventListener('click', function() {
  lightbox.classList.remove('mostrar');
});

// Ocultar el lightbox al hacer clic en cualquier parte fuera de la imagen
lightbox.addEventListener('click', function(event) {
  if (event.target === this) {
    lightbox.classList.remove('mostrar');
  }
});