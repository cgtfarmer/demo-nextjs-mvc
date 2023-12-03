export default class User {

  #id;
  #firstName;
  #lastName;
  #age;
  #weight;

  constructor(id, firstName, lastName, age, weight) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
    this.#weight = weight;
  }

  getId() {
    return this.#id;
  }

  getFirstName() {
    return this.#firstName;
  }

  getLastName() {
    return this.#lastName;
  }

  getAge() {
    return this.#age;
  }

  getWeight() {
    return this.#weight;
  }

  setId(id) {
    this.#id = id;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
  }

  setLastName(lastName) {
    this.#lastName = lastName;
  }

  setAge(age) {
    this.#age = age;
  }

  setWeight(weight) {
    this.#weight = weight;
  }

  toString() {
    return `User: ` +
      `id=${this.#id}, ` +
      `firstName=${this.#firstName}, ` +
      `lastName=${this.#lastName}, ` +
      `age=${this.#age}, ` +
      `weight=${this.#weight}`;
  }
}
