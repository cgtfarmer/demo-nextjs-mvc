import DbConnection from '@/backend/config/db-connection';
import UserMapper from '@/backend/mapper/user-mapper';

export default class UserRepository {

  static async findAll() {
    console.log('[UserRepository#findAll]');
    const dbConnection = await DbConnection.getConnection();

    const results = await dbConnection.execute(`
      SELECT *
      FROM users
    `);

    const userData = results[0];

    const users = UserMapper.fromObjectCollection(userData);

    return users;
  }

  static async findById(id) {
    console.log(`[UserRepository#findById] ${id}`);
    const dbConnection = await DbConnection.getConnection();

    const results = await dbConnection.execute(`
      SELECT *
      FROM users
      WHERE id = ${id}
    `);

    const userDatum = results[0][0];

    const user = UserMapper.fromObject(userDatum);

    return user;
  }

  static async create(user) {
    console.log(`[UserRepository#create] ${user}`);
    const dbConnection = await DbConnection.getConnection();

    const sql = `
      INSERT INTO users (firstName, lastName, age, weight)
      VALUES (?, ?, ?, ?)
    `;

    const values = [user.getFirstName(), user.getLastName(), user.getAge(), user.getWeight()];

    await dbConnection.execute(sql, values);
  }

  static async update(user) {
    console.log(`[UserRepository#update] ${user}`);
    const dbConnection = await DbConnection.getConnection();

    const sql = `
      UPDATE users
      SET firstName = ?,
          lastName = ?,
          age = ?,
          weight = ?
      WHERE id = ?
    `;

    const values = [
      user.getFirstName(),
      user.getLastName(),
      user.getAge(),
      user.getWeight(),
      user.getId()
    ];

    await dbConnection.execute(sql, values);
  }

  static async destroy(id) {
    console.log(`[UserRepository#destroy] ${id}`);
    const dbConnection = await DbConnection.getConnection();

    const sql = `
      DELETE FROM users
      WHERE id = ?
    `;

    await dbConnection.execute(sql, [id]);
  }
}
