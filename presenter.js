import { StartView } from './startview.js';
import { Model } from './model.js';
import { ListView } from './listview.js';
import { InputView } from './inputview.js';

export class Presenter {
  constructor() {
    this.model = new Model();
    this._showListView();
  }

  buttonNewClicked(){
    this.view = new InputView(this);
    this.view.render("Neue Person hinzufügen");
  }

  buttonSafeClick(){
    let person = this.view.getPerson();
    this.model.createPerson(person);
    this._showListView();
  }

  buttonInterruptClick(){
   this._showListView();
  }

  _showListView(){
    this.view = new ListView(this);
    const personen = this.model.readAllPersons();
    this.view.render(personen);

  }
}
