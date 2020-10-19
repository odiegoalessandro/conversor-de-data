var input_monthday = document.getElementById('monthday')
var input_month = document.getElementById('month')
var input_year = document.getElementById('year')
var screen_result = document.getElementById('result')
var btn = document.getElementById('calc')

var date = new Date()

var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var weekdays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado']

btn.addEventListener('click', () => {
    date.setDate(input_monthday.value)
    date.setMonth(input_month.value)
    date.setFullYear(input_year.value)

    screen_result.innerText = `${date.getDate()} de ${months[input_month.value]} de ${date.getFullYear()}, ${weekdays[date.getDay()]}`
})