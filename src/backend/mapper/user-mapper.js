import User from '@/backend/model/user';

export default class UserMapper {

  static fromObject(object) {
    return new User(object.id, object.firstName, object.lastName, object.age, object.weight);
  }

  static fromObjectCollection(objectCollection) {
    const results = [];

    for (let object of objectCollection) {
      results.push(this.fromObject(object));
    }

    return results;
  }

  static toObject(user) {
    const object = {
      id: user.getId(),
      firstName: user.getFirstName(),
      lastName: user.getLastName(),
      age: user.getAge(),
      weight: user.getWeight()
    };

    return object;
  }

  static toObjectCollection(users) {
    const objects = [];

    for (let user of users) {
      const object = this.toObject(user);

      objects.push(object);
    }

    return objects;
  }
}
