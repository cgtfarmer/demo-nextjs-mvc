import Users from '@/data/users';

async function handler(req, res) {
  console.log(`[${req.method}] [Users]`);

  switch(req.method) {
  case 'GET':
    const users = await Users.findAll();

    console.log(users);
    res.status(200).json(users);
    break;

  case 'POST':
    const user = req.body;
    console.log(user);

    await Users.create(user);

    res.status(200).json(user);
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
