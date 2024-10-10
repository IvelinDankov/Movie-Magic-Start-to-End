import jwt from "jsonwebtoken";

const SECRET = "mysecret";

export function authMiddleware(req, res, next) {
  const token = req.cookies["auth"];

  if (!token) {
    return next();
  }

  const decodedToken = jwt.decode(token, SECRET, { httpOnly: true });

  const user = {
    _id: decodedToken._id,
    email: decodedToken.email,
  };

  req.user = user;
  req.isAuthenticated = true;
  res.locals.userId = user._id;
  res.locals.email = user.email;
  res.locals.isAuthenticated = true;

  return next();
}

export function isAuth(req, res, next) {
  if (!req.isAuthenticated) {
    throw new Error("not authenticated");
  }

  return next();
}
