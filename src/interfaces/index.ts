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
  id: number;
  username: string;
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