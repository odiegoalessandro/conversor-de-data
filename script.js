var mountday = document.getElementById('mountday')
var mount = document.getElementById('mount')
var year = document.getElementById('year')
var screen_result = document.getElementById('result')
var btn = document.getElementById('calc')

btn.addEventListener('click', () => {
    screen_result.value = ""
    let k = mountday.value + 2 * mountday.value + [3 * (mount.value + 1) / 5] + year.value + year.value / 4 - year.value / 100 + year.value / 400 + 2
    let result = (k % 7).toFixed(0)
    let weekday = "d"
    if(result == 1){
        weekday = 'Sabado'
        return screen_result.innerText = weekday
    }
    if(result == 2){
        weekday = 'Domingo'
        return screen_result.innerText = weekday
    }
    if(result == 3){
        weekday = 'Segunda-feira'
        return screen_result.innerText = weekday
    }
    if(result == 4){
        weekday = 'Terça-feira'
        return screen_result.innerText = weekday
    }
    if(result == 5){
        weekday = 'Quarta-feira'
        return screen_result.innerText = weekday
    }
    if(result == 6){
        weekday = 'Quinta-feira'
        return screen_result.innerText = weekday
    }
    if(result == 7){
        weekday = 'Sexta-feira'
        return screen_result.innerText = weekday
    }
})