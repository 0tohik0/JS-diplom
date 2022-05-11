import modal from "./modules/modal"
import slider from "./modules/slider"
import scroll from "./modules/smoothScrollBtn"
import timer from "./modules/timer"
import burger from "./modules/burger"
// import formValidate from "./modules/formValidate"
import sendForm from "./modules/sendForm"
import docsModal from "./modules/docsModal"
import calculator from "./modules/calculator"
import secondSlider from "./modules/secondSlider"

modal()
slider()
secondSlider()
scroll()
burger()
// formValidate()
timer('15 may 2022')
docsModal()
calculator()

const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        sendForm({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})