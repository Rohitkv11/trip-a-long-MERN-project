// eslint-disable-next-line import/extensions
import User from '../model/user.js';

const auth =(req, res, next) => {
  const token =req.cookies.auth;
  // eslint-disable-next-line consistent-return
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        error: true,
      });
    }

    req.token= token;
    req.user=user;
    next();
  });
};

export default auth;


