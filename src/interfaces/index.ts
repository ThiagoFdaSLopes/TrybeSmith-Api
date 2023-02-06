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

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginPayload {
  id: number;
  email: string;
  name: string;
}