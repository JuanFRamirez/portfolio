const bgCircle = document.querySelector('.big-circle');
const links = document.querySelectorAll('.nav-link');
const logos = document.querySelectorAll('.logo-image');
const headers = document.querySelectorAll('.heading');
const gridImage = document.querySelectorAll('.iluminate');
const gridImage2 = document.querySelectorAll('.iluminate-fade');
const institutions = document.querySelector('.institutions');
const mobilmenu = document.querySelector('.mobile-menu');
const toBlack = document.querySelector('.tob');
const products = document.querySelector('.products-logos');
const section2 = document.querySelector('.s2');
const section3 = document.querySelector('.s3');
const servicio = document.querySelector('.servicios');
const why = document.querySelector('.why');
const shape = document.querySelector('.shape');
const cbnh = document.querySelector('.cbnh');
const unphu = document.querySelector('.unphu');
const kayros = document.querySelector('.kayros');
const pintos = document.querySelector('.pintos');
const nha = document.querySelector('.nha');
const weather = document.querySelector('.weather');
const actuali = document.querySelector('.actualisite');
const haze = document.querySelector('.haze');
const buttonSend = document.querySelector('.button[name="send"]');
const result = document.querySelector('.result');
const hidacaSpeed = document.querySelector('.hidacaspeed');
const hidacaSeo = document.querySelector('.hidacaseo');
const casaDelArbol = document.querySelector('.casadelarbol');
const sections = document.querySelectorAll('section');
const intersecBox = document.querySelector('.intersec');
const intersecHeader = document.querySelector('.intersec h2');
const contactForm = document.querySelector('.theform form');
const botonProjecto = document.querySelector('.primary');
const botonContacto = document.querySelector('.secundary');
const mobInicio = document.querySelector('.mob-inicio');
const mobProjecto = document.querySelector('.mob-projectos');
const mobContactos = document.querySelector('.mob-contactos');
const valueh3 = document.querySelector('.value-header3');
const valuep = document.querySelector('.value-parag');
const keepScrolling = document.querySelector('.keep-scrolling');
const cv = document.querySelector('.cv');
const hire = document.querySelector('.hire');

let controller;
let slideScene;
let pageScene;
let detailScene;

window.addEventListener('load', () => {
  animateSlides();
});

const animateSlides = () => {
  controller = new ScrollMagic.Controller();

  const sliders = document.querySelectorAll('.slide');

  sliders.forEach((slide, index, slides) => {
    const slideTl = gsap.timeline({
      defaults: { duration: 1, ease: 'power2.inOut' },
    });
    const revealImage = slide.querySelector('.reveal-image');
    const img = slide.querySelector('img');
    const revealText = slide.querySelector('.reveal-text');
    slideTl.fromTo(revealImage, { x: '0%' }, { x: '100%' });
    slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, '-=1');
    slideTl.fromTo(revealText, { x: '0%' }, { x: '100%' }, '-=0.75');

    //create escene

    slideScene = new ScrollMagic.Scene({
      triggerElement: slide,
      triggerHook: 0.25,
      reverse: false,
    })
      .setTween(slideTl)
      .addTo(controller);

    //add new animation

    const pageTl = gsap.timeline();
    let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1];
    pageTl.fromTo(nextSlide, { y: '0%' }, { y: '50%' });
    pageTl.fromTo(slide, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 });
    pageTl.fromTo(nextSlide, { y: '50%' }, { y: '0%' }, '-=0.5');
    //create new scene
    pageScene = new ScrollMagic.Scene({
      triggerElement: slide,
      duration: '100%',
      triggerHook: 0,
    })
      .setPin(slide, { pushFollowers: false })
      .setTween(pageTl)
      .addTo(controller);
  });
};

window.addEventListener('scroll', (e) => {
  const header = document.querySelector('.header');
  if (this.scrollY > 50 && this.innerWidth > 746) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

document.addEventListener('DOMContentLoaded', (e) => {
  bgCircle.classList.add('big-circle-anim');

  (function respondToSection() {
    let elements = [section2, section3, servicio, why];

    elements.forEach((element) => {
      element.addEventListener('mouseover', function () {
        cursor.classList.add('black-borders');
      });
      element.addEventListener('mouseleave', function () {
        cursor.classList.remove('black-borders');
      });
    });
  })();

  bgCircle.addEventListener('animationend', (e) => {
    headers.forEach((head) => {
      head.classList.remove('invert-bright');
    });
  });
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.id == 'open-menu') {
    mobilmenu.style.display = 'flex';
  }
});

document.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains('close')) {
    mobilmenu.style.display = 'none';
  }
});

/**about page**/
if (window.location.href.indexOf('about') > -1) {
  toBlack.addEventListener('mouseover', (e) => {
    cursor.style.borderColor = 'black';
  });
  toBlack.addEventListener('mouseleave', (e) => {
    cursor.style.borderColor = '';
  });

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('products-fade');
      } else {
        return;
      }
    });
  });

  observer.observe(products);
}

let cursor = document.querySelector('.cursor');
const cursorFunc = (e) => {
  cursor.style.position = 'absolute';
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
};
const cursorFunc2 = () => {
  cursor.style.position = 'fixed';
};

window.addEventListener('mousemove', cursorFunc);
document.addEventListener('scroll', cursorFunc2);

links.forEach((link) => {
  if (window.location.href == link.children[0].href) {
    link.children[0].classList.add('link-active');
  } else {
    link.children[0].classList.remove('link-active');
  }
  link.addEventListener('mouseover', (e) => {
    cursor.classList.add('link-grow');
  });
  link.addEventListener('mouseleave', (e) => {
    cursor.classList.remove('link-grow');
  });

  link.addEventListener('click', (e) => {
    e.preventDefault();
    let clicked = e.target.dataset.name;
    if (clicked === 'Inicio') {
      window.scrollTo(0, 0);
    }
    if (clicked === 'Projectos') {
      document.getElementById('Projectos').scrollIntoView();
    }
    if (clicked === 'Contactos') {
      document.getElementById('Contactos').scrollIntoView();
    }
    if (clicked === 'linkedin') {
      window.open('https://www.linkedin.com/in/juan-ramirez-a13422123/');
    }
    if (clicked === 'github') {
      window.open('https://github.com/JuanFRamirez');
    }
  });
});

botonProjecto.addEventListener('click', (e) => {
  document.getElementById('Projectos').scrollIntoView();
});

botonContacto.addEventListener('click', (e) => {
  document.getElementById('Contactos').scrollIntoView();
});

mobInicio.addEventListener('click', (e) => {
  window.scrollTo(0, 0);
  mobilmenu.style.display = 'none';
});

mobProjecto.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Projectos').scrollIntoView();
  mobilmenu.style.display = 'none';
});

mobContactos.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('Contactos').scrollIntoView();
  mobilmenu.style.display = 'none';
});

logos.forEach((logo) => {
  logo.addEventListener('mouseover', (e) => {
    cursor.classList.add('link-grow');
  });
  logo.addEventListener('mouseleave', (e) => {
    cursor.classList.remove('link-grow');
  });
});

gridImage.forEach((image) => {
  image.addEventListener('mouseover', (e) => {
    image.style.filter = 'brightness(100%)';
    cursor.style.background = 'rgba(0,0,0,0.7)';
  });

  image.addEventListener('mouseleave', (e) => {
    image.style.filter = 'brightness(30%)';
    cursor.style.background = '';
  });
});

gridImage2.forEach((image) => {
  image.addEventListener('mouseover', (e) => {
    image.style.filter = 'brightness(100%)';
    cursor.style.background = 'rgba(0,0,0,0.7)';
  });

  image.addEventListener('mouseleave', (e) => {
    image.style.filter = 'brightness(30%)';
    cursor.style.background = '';
  });
});

cv.addEventListener('click', (e) => {
  window.open('./img/projects/Juan Ramirez.pdf', '_blank');
});

hire.addEventListener('click', (e) => {
  window.open('./img/projects/Juan Ramirez.pdf', '_blank');
});

//Observers

const options = {
  root: null,
  rootMargin: '10px',
  threshold: 0.8,
};

if (window.innerWidth) {
  const observerSection1 = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.fromTo(
          haze,
          { top: '26rem', right: '0', opacity: 0 },
          { top: '20rem', right: '10%', opacity: 1 },
          '0.5'
        )
          .fromTo(
            valueh3,
            { opacity: 0, y: '20%' },
            { opacity: 1, y: '0%' },
            '1'
          )
          .fromTo(
            valuep,
            { opacity: 0, y: '20%' },
            { opacity: 1, y: '0%' },
            '-=1'
          )
          .fromTo(
            keepScrolling,
            { opacity: 0, y: '20%' },
            { opacity: 1, y: '0%' },
            '-=1'
          );
        observerSection1.unobserve(why);
      } else {
        return;
      }
    });
  }, options);

  observerSection1.observe(why);

  /*********************** */

  const observerServicio = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.fromTo(
          '.servicios-container h2',
          { opacity: 0, y: '20%' },
          { opacity: 1, y: '0%' }
        ).fromTo(
          '.servicios-container p',
          { opacity: 0, y: '20%' },
          { opacity: 1, y: '0%' }
        );
        observerServicio.unobserve(servicio);
      } else {
        return;
      }
    });
  }, options);
  observerServicio.observe(servicio);
} else {
  valueh3.style.opacity = 1;
  valueh3.style.transform = 'translateY(0)';
  valuep.style.opacity = 1;
  valuep.style.transform = 'translateY(0)';
  keepScrolling.style.opacity = 1;
  keepScrolling.style.transform = 'translateY(0)';

  ////

  let servContainerHeader = document.querySelector('.servicios-container h2');
  let servContainerP = document.querySelector('.servicios-container p');
  servContainerHeader.style.opacity = 1;
  servContainerP.style.opacity = 1;
  servContainerHeader.style.transform = 'translateY(0)';
  servContainerP.style.transform = 'translateY(0)';
}

/*********************** */

const observerSectionIntersec = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.fromTo(
          intersecHeader,
          { opacity: 0, y: '20%' },
          { opacity: 1, y: '0%' },
          '0.5'
        );
        observerSectionIntersec.unobserve(intersecBox);
      } else {
        return;
      }
    });
  },
  options
);

observerSectionIntersec.observe(intersecBox);

/******************* */

const observerForm = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const tl = gsap.timeline({ defaults: { duration: 0.5 } });
      tl.fromTo('form .button', { x: '-250%' }, { x: '0%' });
      observerForm.unobserve(contactForm);
    } else {
      return;
    }
  });
}, options);
observerForm.observe(contactForm);
