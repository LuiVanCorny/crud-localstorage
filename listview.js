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
      personen.forEach(person => {
          let vorname = person.vorname;
          let nachname = person.nachname;
          let geburtsdatum = person.geburtsdatum;
        html += `<li>Vorname: ${vorname} Nachname: ${nachname} Geburtsdatum: ${geburtsdatum}</li>`;
      });   
      html += '</ul>';
      html += '<button id="new">Neue Person hinzufügen</button>';
      this.app.innerHTML = html;
      
      const button = document.getElementById('new');
      button.addEventListener("click", () =>{
        this.presenter.buttonNewClicked()
      })  
      }
  }
  