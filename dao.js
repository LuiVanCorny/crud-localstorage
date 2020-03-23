export class DAO {
    constructor() {}
  
    readData() {
      let dataArray = [];
      if (localStorage.getItem('personen')) {
        let dataString = localStorage.getItem('personen');
        dataArray = JSON.parse(dataString);
      }
      return dataArray;
    }
  
    saveData(dataArray) {
      let dataString = JSON.stringify(dataArray);
      localStorage.setItem('personen', dataString);
    }
  }