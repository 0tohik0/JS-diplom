const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll')

    window.addEventListener('scroll', () => {
        if (window.pageYOffset < 550) {
            scrollBtn.style.transition = ".5s"
            scrollBtn.style.opacity = "0"
        } else {
            scrollBtn.style.transition = ".5s"
            scrollBtn.style.opacity = "1"
        }
    })
    
    scrollBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const anchor = document.getElementById('header')
        anchor.scrollIntoView({block: "start", behavior: "smooth"});
    })
}

export default scroll