const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.count-wrap > .count_1 > span')
    const timerHours = document.querySelectorAll('.count-wrap > .count_2 > span')
    const timerMinutes = document.querySelectorAll('.count-wrap > .count_3 > span')
    const timerSeconds = document.querySelectorAll('.count-wrap > .count_4 > span')


    let intervalID

    const getTimeRemaining = (discount) => {
        let dateStop = new Date(discount).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor(timeRemaining / 60 / 60) % 24
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining(deadline)
        const zeroToNumber = () => {
            timerDays.forEach(timerDays => {
                if (getTime.days < 10) {
                    timerDays.textContent = '0' + getTime.days
                }
            })
            timerHours.forEach(timerHours => {
                if (getTime.hours < 10) {
                    timerHours.textContent = '0' + getTime.hours
                }
            })
            timerMinutes.forEach(timerMinutes => {
                if (getTime.minutes < 10) {
                    timerMinutes.textContent = '0' + getTime.minutes
                }
            })
            timerSeconds.forEach(timerSeconds => {
                if (getTime.seconds < 10) {
                    timerSeconds.textContent = '0' + getTime.seconds
                }
            })
        }

        if (getTime.days < 10 && getTime.days >= 0) {
            timerDays.textContent = '0' + getTime.days
        } 
        if (getTime.hours < 10 && getTime.days >= 0) {
            timerHours.textContent = '0' + getTime.hours
        }
        if (getTime.minutes < 10 && getTime.days >= 0) {
            timerMinutes.textContent = '0' + getTime.minutes
        }
        if (getTime.seconds < 10 && getTime.days >= 0) {
            timerSeconds.textContent = '0' + getTime.seconds
        }
        
        zeroToNumber()

        if (getTime.timeRemaining < 0) {
            clearInterval(intervalID)
            timerDays.textContent = '00'
            timerHours.textContent = '00'
            timerMinutes.textContent = '00'
            timerSeconds.textContent = '00'
        }
        
    }
    
    intervalID = setInterval(() => {
        updateClock()
    }, 1000);
}



export default timer