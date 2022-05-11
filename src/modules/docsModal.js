const docsModal = () => {
    const overlay = document.querySelector('.overlay')
    const body = document.querySelector('body')

    const imgs = document.querySelectorAll('.sertificate-document');
    const disableImgAttributes = document.querySelectorAll('.sertificate-document')

    const hoverEffectImgs = document.querySelectorAll('.document-overlay')

    hoverEffectImgs.forEach(hoverEffectImg => {
        hoverEffectImg.addEventListener('mouseover', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "1"
        })
        hoverEffectImg.addEventListener('mouseout', () => {
            hoverEffectImg.style.transition = '.2s'
            hoverEffectImg.style.opacity = "0"
        })
    })
    
    

    disableImgAttributes.forEach(disableImgAttributes => {
        disableImgAttributes.setAttribute('href', '')
    })

    const addModalDocument = () => {
        overlay.style.display = "block";
        const modalDiv = document.createElement('div')
        modalDiv.classList.add('modal-img')
        body.append(modalDiv)
        modalDiv.innerHTML = `
        <span title="Close" class="header-modal__close">x</span>
        `
        document.addEventListener('click', (e) => {
            if (e.target.closest('.overlay') || e.target.closest(".header-modal__close")) {
                modalDiv.remove()
            }
            
        })
    }

    imgs.forEach(imgDiv => {
        imgDiv.addEventListener('click', (e) => {
            e.preventDefault()            
            addModalDocument()
        })
    })

    
}

export default docsModal