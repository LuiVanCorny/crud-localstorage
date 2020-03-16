import { Person } from "./person.js";

export class InputView {
    constructor(presenter) {
      this.presenter = presenter;
      this.app = document.getElementById('app');
    }
  
    render() {
      let html = `<h2>Neue Person hinzufügen</h2>
      <fieldset>
      <legend>Vorname:</legend>
      <input type="text" id="vorname"/>
      </fieldset>
      <fieldset>
      <legend>Nachname:</legend>
      <input type="text" id="nachname"/>
      </fieldset>
      <fieldset>
      <legend>Geburtsdatum:</legend>
      <input type="date" id="geburtsdatum"/>
      </fieldset>
      <button id="safe">Speichern</button>
      <button id="interrupt">Abbrechen</button>`;      
      this.app.innerHTML = html;
      this._addEventListener();
    }

    _addEventListener(){
        const safe = document.getElementById("safe");
        safe.addEventListener("click", () => {
            this.presenter.buttonSafeClick();
        });

        const interrupt = document.getElementById("interrupt");
        interrupt.addEventListener("click", () => {
            this.presenter.buttonInterruptClick();
        });
    }

    getPerson(){
        const vorname = document.getElementById('vorname').value;
        const nachname = document.getElementById('nachname').value;
        const geburtsdatum = document.getElementById('geburtsdatum').value;

        let person = new Person();
        person.vorname = vorname;
        person.nachname = nachname;
        person.geburtsdatum = geburtsdatum;

        return person;

    }
  }
  