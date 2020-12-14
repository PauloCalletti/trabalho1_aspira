import Book from './intities/Book.js'
import Periodical from './intities/Periodical.js'
import Person from './intities/Person.js'
import {Gender} from './intities/Person.js'

// Individual do Book
const isbn = document.querySelector<HTMLInputElement>('#isbn')! 
const edition = document.querySelector<HTMLInputElement>('#edition')!
const volume = document.querySelector<HTMLInputElement>('#volume')!
const titleb = document.querySelector<HTMLInputElement>('#titleb')!
const subtitleb = document.querySelector<HTMLInputElement>('#subtitleb')!
const publishedAtb = document.querySelector<HTMLInputElement>('#publishedatb')!
let authorb = document.querySelector<HTMLSelectElement>('#authorb')!

// Individual do Periodical
const issn = document.querySelector<HTMLInputElement>('#issn')!
const issue = document.querySelector<HTMLInputElement>('#issue')!
const volumee = document.querySelector<HTMLInputElement>('#volumee')!
const titlep = document.querySelector<HTMLInputElement>('#titlep')!
const subtitlep = document.querySelector<HTMLInputElement>('#subtitlep')!
const publishedAtp = document.querySelector<HTMLInputElement>('#publishedatp')!
let authorp = document.querySelector<HTMLSelectElement>('#authorp')!


// Funcionalidade
const formb = document.querySelector<HTMLFormElement>('#formb')!
const formp = document.querySelector<HTMLFormElement>('#formp')!
const formselect = document.querySelector<HTMLFormElement>('#formselect')!
const selection = document.querySelector<HTMLSelectElement>('#selection')!
const answer = document.querySelector<HTMLDivElement>('.answer')!


let table = document.querySelector('table')!
let registersb: Book [] = []
let registersp: Periodical [] = []
let author: Person [] = [] 

showRegistersp()
showRegistersb()

const capt = (text: string) => {
   const word = text.split(' ')
   for (let i = 0; i < word.length; i++) {
      word[i] =
         word[i].substr(0, 1).toUpperCase() +
         word[i].substr(1).toLowerCase()
   }
   return word.join(' ')
   // .replace(/ e /gi, ' e ')
   // .replace(/ a /gi, ' a ')
   // .replace(/ o /gi, ' o ')
   // .replace(/ de /gi, ' de ')
   // .replace(/ do /gi, ' do ')
   // .replace(/ da /gi, ' da ')
}

   let persp: Array<Person> = JSON.parse(localStorage.getItem('peoples')!) 
   let i = 0
   for (const per of persp) {
      const option = document.createElement('option')
      option.value = i.toString()
      option.innerText = per.name
      authorp.append(option)
      i++
   }
   
   let persb: Array<Person> = JSON.parse(localStorage.getItem('peoples')!) 
   for (const per of persb) {
      const option = document.createElement('option')
      option.value = i.toString()
      option.innerText = per.name
      authorb.append(option)
      i++
   }
   //Controla a Escolha do Usuário 
   formselect.addEventListener('change', (e: Event) => {
      e.preventDefault()
      if (!selection.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Material to Include'
         return
      }
      if (selection.value) {
         answer.innerText = ''
      } 
      shower() 
   })

   if(!table) {
      table = document.createElement('table')
      document.body.append(table)
   }

// Controla o Form na tela, apesar do 1o IF não funcionar, por algum motivo
function shower() {
      if(!selection.value) {
         formp.hidden = true
         formb.hidden = true
         
      }
      if(selection.value == 'sbook') {
         formb.hidden = false
         formp.hidden = true
         return
      } 
      if(selection.value == 'speriodical') {
         formb.hidden = true
         formp.hidden = false
         return
      }
} 

   //Controla o submit do Formulário Book
   formb.addEventListener('submit', (e: Event) => {
       e.preventDefault()
      let authob = authorb.value
      let persob = persb[parseInt(authob)] 

      
      if(!isbn.value) {
         answer.className = 'no'
         answer.innerText = 'Select a ISBN'
         return
      }
      if(!edition.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Edition'
         return
   
      }
      if(!volume.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Volume'
         return
      }
      if(!titleb.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Title'
         return
      }
      if(!subtitleb.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Subtitle'
         return
      }
      if(!publishedAtb.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Date'
         return
      }
      if(!authorb.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Author'
         return
      }

      

      if ('submit') {
         answer.className = 'yes'
         answer.innerText = 'Registered Successfully'
         
      }
      // let tk = pers[parseInt(author.value)]
      setTimeout(() => {
         try {
         let regb = new Book  (
            parseInt(isbn.value), parseInt(edition.value), parseInt(volume.value), capt(titleb.value), capt(subtitleb.value), new Date(`${publishedAtb.value}T00:00:00`), persob)
         registersb.sort().push(regb)
         localStorage.setItem('Books', JSON.stringify(registersb))
         showRegistersb()
   
         } 
         catch (error: any) {
               console.error(error)
               answer.innerText = 'Erro Incomum! D:'
               answer.className = 'no'
   
         } finally {
         }
      }, 1)
   })

   //Controla o submit do Formulário Periodical
   formp.addEventListener('submit', (e: Event) => {
      e.preventDefault()
      let authop = authorp.value
      let persop = persp[parseInt(authop)]

         if(!issn.value) {
         answer.className = 'no'
         answer.innerText = 'Select a ISSN'
         return
      }
      
      if(!volumee.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Volume'
         return
      }
      if(!issue.value) {
         answer.className = 'no'
         answer.innerText = 'Select a ISSUE'
         return
   
      }
      if(!titlep.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Title'
         return
      }
      if(!subtitlep.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Subtitle'
         return
      }
      if(!publishedAtp.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Date'
         return
      }
      if(!authorp.value) {
         answer.className = 'no'
         answer.innerText = 'Select a Author'
         return
      }
      
      if ('submit') {
         answer.className = 'yes'
         answer.innerText = 'Registered Successfully'
         
      }

     setTimeout(() => {
      try {
      const regp = new Periodical (
         parseInt(issn.value), parseInt(volumee.value), parseInt(issue.value), capt(titlep.value), capt(subtitlep.value), new Date(`${publishedAtp.value}T00:00:00`), persop)
                  
      registersp.push(regp)
      localStorage.setItem('Periodicals', JSON.stringify(registersp))
      showRegistersp()

      } 
      catch (error: any) {
         console.error(error)
         answer.innerText = 'Erro Incomum! D:'
         answer.className = 'no'

      } finally {
      }
   }, 1)
  }) 

   
// Função para mostrar o conteúdo do localStorage quando com BOOK
function showRegistersb () {
   if(localStorage.getItem('Books')){
      const books = JSON.parse(localStorage.getItem('Books')!)

      registersb.sort().splice(0)
      let sorted = [...registersb].sort()
      
      for (const item of books) {
         registersb.sort().push(new Book(
            item.isbn,
            item.edition,
            item.volume,
            item.title,
            item.subtitle,
            item.publishedAt,
            item.author,
         ))
      }
   }
   let tableb  = document.querySelector('table')
   

   if(!tableb) {
      tableb = document.createElement('table')
      document.body.append(tableb)
   }

   let lines = ''

   for(const regb of registersb) {
      lines += `
      <tr>
         <td >${regb.isbn}</td>
         <td >${regb.edition}</td>
         <td >${regb.volume}</td>
         <td >${regb.title}</td>
         <td >${regb.subtitle}</td>
         <td >${regb.publishedAt}</td>
         <td >${regb.author}</td>
      </tr>
      `
   }
   
   tableb.innerHTML = `
      <thead>
         <th >ISBN:</th>
         <th >Edition:</th>
         <th >Volume:</th>
         <th >Title:</th>
         <th >Subtitle:</th>
         <th >PublishedAt:</th>
         <th >Author:</th>

      </thead>
      <tbody>
            ${lines}
      </tbody>
   `
   
}
// Função para mostrar o conteúdo do localStorage quando com PERIODICAL
function showRegistersp () {
   if(localStorage.getItem('Periodicals')){
      const periodicals = JSON.parse(localStorage.getItem('Periodicals')!)

      registersp.splice(0)
      
      for (const item of periodicals) {
         registersp.push(new Periodical(
            item.issn,
            item.volume,
            item.issue,
            item.title,
            item.subtitle,
            item.publishedAt,
            item.author,
         ))
      }
   }
   let tablep  = document.querySelector('table')

   if(!tablep) {
      tablep = document.createElement('table')
      document.body.append(tablep)
   }

   let lines = ''

   for(const regp of registersp) {
      lines += `
      <tr>
         <td >${regp.issn}</td>
         <td >${regp.volume}</td>
         <td >${regp.issue}</td>
         <td >${regp.title}</td>
         <td >${regp.subtitle}</td>
         <td >${regp.publishedAt}</td>
         <td >${regp.author}</td>
      </tr>
      `
   }
   
   tablep.innerHTML = `
      <thead>
         <th >ISSN:</th>
         <th >Volume:</th>
         <th >ISSUE:</th>
         <th >Title:</th>
         <th >Subtitle:</th>
         <th >PublishedAt:</th>
         <th >Author:</th>
      </thead>
      <tbody>
            ${lines}
      </tbody>
   `
   
   
}

