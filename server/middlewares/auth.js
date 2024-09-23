/** @format */

// /** @format */

// import jwt from "jsonwebtoken";

// export const authMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization;
//   const jwtToken = token.split(" ")[1];

//   jwt.verify(jwtToken, process.env.SECRET, (err, suc) => {
//     if (err) {
//       res.status(401).send({ msg: "invalid token provide" });
//       return;
//     } else {
//       res.locals.userId = suc.userId;
//       next();
//       return;
//     }
//   });
//   res.status(401).send({ msg: "invalid token provide" });
//   return;
// };

import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ msg: "Token is required" });
  }

  const jwtToken = token.split(" ")[1];

  jwt.verify(jwtToken, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ msg: "Invalid token provided" });
    }

    // Токен амжилттай баталгаажсан
    res.locals.userId = decoded.userId;
    next();
  });
};
