import { Person } from "./person.js";

export class InputView {
    constructor(presenter) {
      this.presenter = presenter;
      this.app = document.getElementById('app');
    }
  
    render(text) {
      let html = `<h2>${text}</h2>
      <p>
      <label>Vorname:</label>
      <input type="text" id="vorname"/>
      </p>
      <p>
      <label>Nachname:</label>
      <input type="text" id="nachname"/>
      </p>
      <p>
      <label>Geburtsdatum:</label>
      <input type="date" id="geburtsdatum"/>
      </p>
      <p>
      <button id="safe">Speichern</button>
      <button id="interrupt">Abbrechen</button>
      </p>`;      
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
  