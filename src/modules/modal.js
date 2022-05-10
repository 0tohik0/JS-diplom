const modal = () => {
    const headerModal = document.querySelector('.header-modal')
    const serviceModal = document.querySelector('.services-modal')
    const overlay = document.querySelector('.overlay')

    const close = document.querySelectorAll('[title="Close"]')
    const fancy = document.querySelectorAll('.fancyboxModal')

    fancy.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.hash === '#callback') {
                headerModal.style.display = 'block'
                overlay.style.display = 'block'
            } else if (btn.hash === '#application') {
                serviceModal.style.display = 'block'
                overlay.style.display = 'block'
            }
        })
    })
    close.forEach(btn => {
        btn.addEventListener('click', () => {
            headerModal.style.display = ''
            overlay.style.display = ''
            serviceModal.style.display = ''
        })
    })
}

export default modal