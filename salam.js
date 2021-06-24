const duyme1 = document.querySelector('.duyme1')
const duyme2 = document.querySelector('.duyme2')
const duyme3 = document.querySelector('.duyme3')
const duyme4 = document.querySelector('.duyme4')
const melumat1 = document.querySelector('.melumat1')
const melumatlar = document.querySelector('.melumatlar')
const container = document.querySelector('.container')
const sual1 = document.querySelector('.sual1')
const sual2 = document.querySelector('.sual2')
const sual3 = document.querySelector('.sual3')
const sual4 = document.querySelector('.sual4')




    duyme1.addEventListener('click', () => sual1.classList.toggle('dum'))
    duyme2.addEventListener('click', () => sual2.classList.toggle('dum'))
    duyme3.addEventListener('click', () => sual3.classList.toggle('dum'))
    duyme4.addEventListener('click', () => sual4.classList.toggle('dum'))

