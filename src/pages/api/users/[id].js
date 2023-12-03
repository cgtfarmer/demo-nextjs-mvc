import Users from '@/data/users';

async function handler(req, res) {
  const { id } = req.query;
  console.log(`[${req.method}] [Users] ${id}`);

  let user = null;

  switch(req.method) {
  case 'GET':
    user = await Users.findById(id);

    console.log(user);
    res.status(200).json(user);
    break;

  case 'PUT':
    user = req.body;
    console.log(user);

    await Users.update(id, user);

    res.status(200).json(user);
    break;

  case 'DELETE':
    await Users.destroy(id);

    res.status(200).json({ msg: 'Deleted successfully' });
    break;

  default:
    res.status(400).json({ msg: 'Invalid route' });
  }
}

export default handler;
