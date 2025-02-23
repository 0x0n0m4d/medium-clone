export interface SendMailProps {
  token?: string;
  redirectUrl?: string;
  email: string;
  isLogin: boolean;
}

export interface GetUserDataActionProps {
  id: string;
}

export interface SaveUserDataActionProps {
  email: string;
  name: string;
}

export interface GetUsersDataActionProps {
  size?: number;
  id: string;
}
