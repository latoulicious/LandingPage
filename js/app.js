window.addEventListener("load", (event) => {
    const header = document.querySelector('.navbar')
  
    window.addEventListener('scroll', e => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    })
  })