export class ListView {
    constructor(presenter) {
      this.presenter = presenter;
      this.app = document.getElementById('app');
      console.log('Listview');
    }
  
    render(personen) {       
      let html =`
      <h2>Liste aller Personen</h2>
      <ul>`;
      let index = 0;
      personen.forEach(person => {
          let vorname = person.vorname;
          let nachname = person.nachname;
          let geburtsdatum = person.geburtsdatum;
          let haare = "nein";
          let haarfarbe = "";
          if(person.haare == true){
             haare = "ja";
             haarfarbe = `Haarfarbe: ${person.haarfarbe}`
          }
        html += `<li>Vorname: ${vorname} 
        Nachname: ${nachname} 
        Geburtsdatum: ${geburtsdatum} 
        Haare: ${haare} `;
        html += haarfarbe;
        html +=`<button class='delete' id="${index}">X</button></li>`;
        index++;
      });   
      html += '</ul>';
      html += '<button id="new">Neue Person hinzufügen</button>';
      this.app.innerHTML = html;

      const button = document.getElementById('new');
      button.addEventListener("click", () =>{
        this.presenter.buttonNewClicked()
      })

      const deleteButtons = document.getElementsByClassName('delete');
      let deleteButtonsLength = deleteButtons.length;

      for(let i = 0; i< deleteButtonsLength;i++){
          deleteButtons[i].addEventListener("click", () =>{
            this.presenter.buttonDeleteClick(deleteButtons[i].id);
          })
        }     

      }
  }
  