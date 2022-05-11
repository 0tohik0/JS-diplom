import modal from './modules/modal'
import scroll from './modules/scroll'
import timer from './modules/timer'
import calculator from './modules/calculator'
import modalPhoto from './modules/modalPhoto'
import modalServices from './modules/modalServices'
import sendingForm from './modules/sendingForm'
import validateForm from './modules/validateForm'

modal()
scroll()
timer('25 may 2022')
calculator()
modalPhoto()
modalServices()
sendingForm()
validateForm()

const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        
        sendingForm({
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