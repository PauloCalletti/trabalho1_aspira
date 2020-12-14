   import Person from './intities/Person.js'
   import {Gender} from './intities/Person.js'

   const name = document.querySelector<HTMLInputElement>('#name')!
   const gender = document.querySelector<HTMLSelectElement>('#gender')!
   const birth = document.querySelector<HTMLInputElement>('#birth')!
   const form = document.querySelector<HTMLFormElement>('form')!
   const answer = document.querySelector<HTMLDivElement>('.answer')!

   let table = document.querySelector('table')!
   let peoples: Person[] = []
   showPeoples()

   form.addEventListener('submit', (e: Event) => {
      e.preventDefault()

      let slugName = name.value.trim().replace(/\s+/g, ' ')
      if (!slugName) {
         answer.className = 'no'
         answer.innerText = 'The Field Name Cannot Be Empty'
         return
      }

      if (!gender.value) {
         answer.className = 'no'
         answer.innerText = 'Select your Gender'
         return
      }

      if (!birth.value) {
         answer.className = 'no'
         answer.innerText = 'Select your Date of Birth With Day, Month and Year'
         return
      }

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

      if ('submit') {
         answer.className = 'yes'
         answer.innerText = 'Registered Successfully'
      }


   setTimeout(() => {
      try {

      const people = new Person (
         `${capt(name.value)}`, gender.value === 'f' ? Gender.Female : Gender.Male, new Date(`${birth.value}T00:00:00`))
                  
      peoples.sort().push(people)
      localStorage.setItem('peoples', JSON.stringify(peoples))
      showPeoples()

      } 
      catch (error: any) {
            console.error(error)
            answer.innerText = 'Erro Incomum! D:'
            answer.className = 'no'

      } finally {
      }
   }, 1)
})
   
   if(!table) {
      table = document.createElement('table')
      document.body.append(table)
}
   

   function showPeoples () {
      if(localStorage.getItem('peoples')){
         let arq = JSON.parse(localStorage.getItem('peoples')!)

         arq.value=''
         arq = arq.sort()
         peoples.splice(0)
         
         for (const item of arq) {
            peoples.push(new Person(
               item.name,
               item.gender,
               item.birth,
            ))
         }
      }
      let table  = document.querySelector('table')
      if(!table) {
         table = document.createElement('table')
         document.body.append(table)
      }


      let lines = ''

      for(const people of peoples) {
            lines += `
            <tr>
               <td >${people.name}</td>
               <td >${people.gender}</td>
               <td >${people.birth}</td>
            </tr>
            `
      }
      
      table.innerHTML = `
         <thead>
               <th >Name:</th>
               <th >Gender:</th>
               <th >Birth:</th>
         </thead>
         <tbody>
               ${lines}
         </tbody>
      `
   }
 