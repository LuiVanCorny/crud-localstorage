import { Person } from "./person.js";

export class Model {
  constructor() {
    this.personen = [];
    this.personen.push(new Person());
    let person1 = new Person();
    person1.vorname = "Ludwig";
    person1.nachname = "Korn";
    person1.geburtsdatum = "1997-12-12";

    let person2 = new Person();
    person2.vorname = "Nikk";
    person2.nachname = "Bucckau";
    person2.geburtsdatum = "1998-12-12";    

    this.personen.push(person1);
    this.personen.push(person2);

  }

  // CRUD-Methoden
  //CREATE
  createPerson(person){
    this.personen.push(person);
  }

  //READ
  readAllPersons(){
    return this.personen;
  }
  getText() {
    return 'Hello from Model!';
  }
  //UPDATE

  //DELETE
  deletePerson(index){
    this.personen.splice(index,1);
  }

}
