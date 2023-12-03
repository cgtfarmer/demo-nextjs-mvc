import UserRepository from '@/backend/repository/user-repository';
import UserMapper from '@/backend/mapper/user-mapper';

export default class UserController {

  static async index(req, res) {
    console.log('[UserController#index]');

    const users = await UserRepository.findAll();

    const response = UserMapper.toObjectCollection(users);
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async show(req, res) {
    const { id } = req.query;
    console.log(`[UserController#show] ${id}`);

    const user = await UserRepository.findById(id);

    const response = UserMapper.toObject(user);
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async create(req, res) {
    const data = req.body;
    console.log(`[UserController#create] ${JSON.stringify(data)}`);

    const user = UserMapper.fromObject(data);

    await UserRepository.create(user);

    const response = { msg: 'Created successfully' };
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async update(req, res) {
    const { id } = req.query;
    const data = req.body;
    console.log(`[UserController#update] ${id}, ${JSON.stringify(data)}`);

    const user = UserMapper.fromObject(data);
    user.setId(id);

    await UserRepository.update(user);

    const response = { msg: 'Updated successfully' };
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }

  static async destroy(req, res) {
    const { id } = req.query;
    console.log(`[UserController#destroy] ${id}`);

    await UserRepository.destroy(id);

    const response = { msg: 'Deleted successfully' };
    console.log(`Response: ${JSON.stringify(response)}`);
    res.status(200).json(response);
  }
}
