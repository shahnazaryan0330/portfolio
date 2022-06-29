const en = {
   contact: 'Contact',
   works: 'Works',
   skills: 'Skills',
   name: 'Name',
   surname: 'Surname',
   mail: 'E-mail',
   chooseAfile: 'Choose a file',
   select: 'Select',
   comment: 'Comment',
   send: 'Send'
}
const ru = {
   contact: 'Контакты',
   works: 'Работы',
   skills: 'Навыки',
   name: 'Имя',
   surname: 'Фамилия',
   chooseAfile: 'Выберите файл',
   select: 'Выбрать',
   comment: 'Комментировать',
   send: 'Отправить'
}

const lngToggle = document.querySelector('.lngToggle')
const langArray = document.querySelectorAll('[data-id="lang"]')
let tmp = false

for (let item in ru) {
   console.log(item);
}

lngToggle.addEventListener('click', event => {
   const flag = document.querySelector('.lngToggleFlag')

   if (tmp) {
      flag.src = './img/en.png'
   }
   else {
      flag.src = './img/ru.png'
   }
   tmp = !tmp
})

// animation
const animItems = document.querySelectorAll('._animItem')

window.addEventListener('scroll', () => {
   setTimeout(() => {
      animOnScroll()
   }, 200);
})

function animOnScroll() {
   animItems.forEach(item => {
      let animHeight = item.offsetHeight
      let animOffset = offset(item).top
      let animStart = 4

      let animPoint = window.innerHeight - animHeight / animStart

      if (animHeight > window.innerHeight) {
         animPoint = window.innerHeight - window.innerHeight / animStart
      }

      if ((pageYOffset > animOffset - animPoint) && pageYOffset < (animOffset + animHeight)) {
         item.classList.add('active')
      }
   })
}
animOnScroll()

function offset(item) {
   const rect = item.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop

   return { top: rect.top + scrollTop }
}