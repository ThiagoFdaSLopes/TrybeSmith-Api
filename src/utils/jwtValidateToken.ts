import jwt from 'jsonwebtoken';

export default function validateTokenUser(token: string) {
  const verify = jwt.verify(token, 'secret');
  return verify;
}