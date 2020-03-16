export class Model {
  constructor() {
    this.personen = [];
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

}
