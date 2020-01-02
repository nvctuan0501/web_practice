(() => {
  onClickDropDown()
})()

function onClickDropDown() {
  let btn = document.querySelector('.js-btn-hamburger')
  let menu = document.querySelector('.navbar')

  btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('is-action')
  })

}


