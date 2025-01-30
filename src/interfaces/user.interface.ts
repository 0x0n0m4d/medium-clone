export interface User {
  id?: number;
  email: string;
  name: string;
  username: string;
  photoUrl?: string | null;
  isActivated?: boolean;
  bio?: string | null;
  pronouns?: string[];
}

export interface SendMailProps {
  token?: string;
  email: string;
  isLogin: boolean;
}

export interface GetUserDataActionProps {
  id: number;
}

export interface SaveUserDataActionProps {
  email: string;
  name: string;
}
