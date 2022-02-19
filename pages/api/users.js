import { getDatabase } from './../../service/database'


export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return getDatabase('user')
        .select('*')
        .then(users => res.json(users))
        .catch(err => {
          console.log(err)
          res.status(400).json({})
        })
    case 'POST':
      const { name, lastname } = req.body;
      return getDatabase('user')
        .insert({ name, lastname })
        .returning('*')
        .then(user => res.json(user))
        .catch(err => {
          console.log(err)
          res.status(400).json({})
        });
    default: return res.status(204).json({})
  }
}
