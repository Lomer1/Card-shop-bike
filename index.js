let bike = document.getElementById('1')
let woman = document.getElementById('2')
let picture = document.getElementById('Img')
let mainNode = document.querySelector('h1')
let mainNode_1 = document.querySelector('p')
let mainNode_2 = document.getElementById('MainNode__2')
let char_1 = document.getElementById('char_1')
let char_2 = document.getElementById('char_2')
let char_3 = document.getElementById('char_3')
let char_4 = document.getElementById('char_4')
let ul = document.getElementById('ul')
let card = document.getElementById('card')

if (bike.className == 'btn open') {
     woman.classList.add('mobile')
}

const clickBike = () => {
     if (bike.className !== 'btn open') {
       woman.classList.remove('open')
       bike.classList.add('open')
       picture.src = 'image1.png'
       mainNode.textContent = 'Велосипед STELS Navigator 510 HD 26 2022'
       mainNode_1.textContent = 'Данный велосипед с колесами 26 дюймов хорошо подходит высоким подросткам. Прогиб рамы и небольшой размер рамы расчитан на рост от 135 до 165 см.'
       mainNode_2.textContent = 'Суммарный вес велосипеда был снижен до 16,9 кг, так как рама была изготовлена с учетом использования велосипеда подростками.'
       char_1.textContent = 'Двойной обод'
       char_2.textContent = 'Алюминиевый сплав'
       char_3.textContent = 'Колеса диаметром 26 дюймов'
       char_4.textContent = 'Покрышки 26х1,95"'
       ul.classList.remove('woman')
       woman.classList.add('mobile')
       card.classList.remove('woman-open')
     } 
  }

  const clickBikeWoman = () => {
    if (bike.className == 'btn open') {
      bike.classList.remove('open')
       woman.classList.add('open')
       picture.src = 'image2.png'
       mainNode.textContent = 'Велосипед SCHWINN Traveler women 2022'
       mainNode_1.textContent = 'Женский велосипед со стальной рамой Classic step-true lightweight позволяет девушкам без проблем его перемещать.'
       mainNode_2.textContent = 'На данном велосипеде имеется 7 скоростей с переключателями от Shimano, а жесткая вилка обеспечивает отличную управляемость. Подходит для катания по асфальтированным поверхностям.'
       char_1.textContent = 'Стальная рама'
       char_2.textContent = 'Жесткая вилка'
       char_3.textContent = 'Колеса диаметром 24 дюймов'
       char_4.textContent = '7 скоростей'
       ul.classList.add('woman')

       woman.classList.remove('mobile')
       card.classList.add('woman-open')
     } 
  }