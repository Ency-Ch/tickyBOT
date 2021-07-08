 const scrolly = document.getElementById('up_button')

 scrolly.addEventListener('click', scrollUp)

function scrollUp(){
    window.scrollTo(
        {top: 0,
        left:0,
        behaviour: 'smooth'})
   

}

