const $btMenu = document.querySelector('.bx')
const $menu = document.querySelector('.nav-list')

$btMenu.addEventListener('click', function() {
    $menu.classList.toggle('active')
    $btMenu.classList.toggle('close')
    console.log("AE")
})

