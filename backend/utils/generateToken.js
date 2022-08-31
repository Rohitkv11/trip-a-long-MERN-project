import jwt from 'jsonwebtoken';

const generateToken = (id,isAdmin) => jwt.sign({ id,isAdmin }, process.env.SECRET, {
  expiresIn: '30d',
});


export default generateToken;
