import createError from 'http-errors';

export const adminCheck = (req, res, next) => {
  if (req.user.role === 'Host') {
    next();
  } else {
    next(createError(403, 'host only!'));
  }
};
