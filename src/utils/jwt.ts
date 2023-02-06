import jwt from 'jsonwebtoken';
import { Payload } from '../interfaces';

export default function createToken(body: Payload): string {
  const token = jwt.sign(body, 'secret');
  return token;
}