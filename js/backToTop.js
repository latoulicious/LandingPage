window.addEventListener('load', () => {
    const button = document.querySelector('.back-to-top')
  
    window.addEventListener('scroll', e => {
      if (window.scrollY > 10) {
        button.classList.add('show')
      } else {
        button.classList.remove('show')
      }
    })
})

window.addEventListener('load', () => {
  const button = document.querySelector('.back-to-top')

  button.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
})