export default class ListPerson {
  constructor() {
    this.persons = [];
  }
  deletePerson(id) {
    const index = this.persons.findIndex((person) => {
      return person.ma === id;
    });
    this.persons.splice(index, 1);
  }
}
