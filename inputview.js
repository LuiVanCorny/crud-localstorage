import { Person } from "./person.js";

export class InputView {
    constructor(presenter) {
      this.presenter = presenter;
      this.app = document.getElementById('app');
      this.switch = 0;
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
      <fieldset>
      <legend>Haare:</legend>
      <input type="checkbox" id="haare"/>
      </fieldset>
      <fieldset class='nodisplay' id="haarfarbe">
      <legend>Haarfarbe:</legend>
      <input id='farbeRot' type="radio" name="haarfarbe" value="rot" checked="checked"/> Rot
      <input id='farbeGrün' type="radio" name="haarfarbe" value="grün"/> Grün
      <input id='farbeBlau' type="radio" name="haarfarbe" value="blau"/> Blau
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

        const haare = document.getElementById('haare');
        haare.addEventListener("click", () =>{
            this.haarfarbeAuswahl();
        } )

    }

    getPerson(){
        const vorname = document.getElementById('vorname').value;
        const nachname = document.getElementById('nachname').value;
        const geburtsdatum = document.getElementById('geburtsdatum').value;
        const haare = document.getElementById('haare').checked;

        let person = new Person();
        person.vorname = vorname;
        person.nachname = nachname;
        person.geburtsdatum = geburtsdatum;
        person.haare = haare;

        if(haare == true){
          const rot = document.getElementById('farbeRot');
          const grün = document.getElementById('farbeGrün');
          const blau = document.getElementById('farbeBlau');

          if(rot.checked==true){
            person.haarfarbe = rot.value;
          }

          if(grün.checked ==true){
            person.haarfarbe = grün.value;
          }

          if(blau.checked == true){
            person.haarfarbe = blau.value;
          }

        }

        return person;

    }

    haarfarbeAuswahl(){
      if(this.switch % 2 ==0){
        const haarfarbe = document.getElementById('haarfarbe').className = "display";
      }
      else{
        const haarfarbe = document.getElementById('haarfarbe').className = "nodisplay";
      }
      this.switch++;
    }
  }
  