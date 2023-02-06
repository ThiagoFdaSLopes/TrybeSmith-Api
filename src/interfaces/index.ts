export interface IProductCreate {
  name: string;
  amount: string;
}

export interface IUserCreate {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

export interface Payload {
  username: string;
  vocation: string;
  level: number;
}