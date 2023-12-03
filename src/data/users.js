import { getDbConnection } from '@/data/db-connection';

export default class Users {

  static async findAll() {
    const dbConnection = await getDbConnection();

    var results = await dbConnection.execute(`
      SELECT *
      FROM users
    `);

    const items = results[0];

    return items;
  }

  static async findById(id) {
    const dbConnection = await getDbConnection();

    var results = await dbConnection.execute(`
      SELECT *
      FROM users
      WHERE id = ${id}
    `);

    var user = results[0][0];

    return user;
  }

  static async create(user) {
    const dbConnection = await getDbConnection();

    var sql = `
      INSERT INTO users (firstName, lastName, age, weight)
      VALUES (?, ?, ?, ?)
    `;
    var values = [user.firstName, user.lastName, user.age, user.weight];

    await dbConnection.execute(sql, values);
  }

  static async update(id, user) {
    const dbConnection = await getDbConnection();

    var sql = `
      UPDATE users
      SET firstName = ?,
          lastName = ?,
          age = ?,
          weight = ?
      WHERE id = ?
    `;
    var values = [user.firstName, user.lastName, user.age, user.weight, id];

    await dbConnection.execute(sql, values);
  }

  static async destroy(id) {
    const dbConnection = await getDbConnection();

    var sql = `
      DELETE FROM users
      WHERE id = ?
    `;

    await dbConnection.execute(sql, [id]);
  }
}
