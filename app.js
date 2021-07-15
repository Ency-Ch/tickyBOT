
var up_button = document.querySelector('.up_button')

var rootElement = document.documentElement

document.addEventListener('scroll', handleScroll)


 up_button.addEventListener('click', scrollUp)

function scrollUp(){
    window.scrollTo(
        {top: 0,
        left:0,
        behaviour: 'smooth'})
}



function handleScroll (){

    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight

    if ((rootElement.scrollTop / scrollTotal ) > 0.5 ) {
        // Show button
        up_button.classList.add("showBtn")
      } else {
        // Hide button
        up_button.classList.remove("showBtn")
      }
      console.log('hello')
}

console.log(up_button.classList)
console.log(up_button)