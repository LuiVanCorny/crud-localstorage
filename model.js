import { Person } from "./person.js";
import { DAO } from './dao.js';

export class Model {
  constructor() {
    this.dao = new DAO();
    this.personen = this.dao.readData();

  }

  // CRUD-Methoden
  //CREATE
  createPerson(person){
    this.personen.push(person);
    this.dao.saveData(this.personen);
  }

  //READ
  readAllPersons(){
    return this.personen;
  }

  getText() {
    return 'Hello from Model!';
  }


  //DELETE
  deletePerson(index){
    this.personen.splice(index,1);
    this.dao.saveData(this.personen);
  }

}
