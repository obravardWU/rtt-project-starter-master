interface User {
  id?:number;
  name: string;
  email: string;
  password?: string;
}

export type UserInfo = User | null;
