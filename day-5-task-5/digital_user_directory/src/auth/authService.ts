import { UserManager } from "oidc-client-ts";
import { authConfig } from "./authConfig";

const userManager = new UserManager(authConfig);

export const login = () => userManager.signinRedirect();

export const handleCallback = async () => {
  const user = await userManager.signinRedirectCallback()

  if (user?.access_token) {
    sessionStorage.setItem("access_token", user.access_token);
  }

  return  user;

};

export interface UserProfile {
  name?: string;
  email?: string;
  [key: string]: unknown;
}

export const getAccessToken = () => {
  return sessionStorage.getItem("access_token");
};

export const getUserProfile = async (): Promise<UserProfile | null> => {
  const user = await userManager.getUser();
  if (user && user.profile) {
    return {
      name: user.profile.name || user.profile.preferred_username,
      email: user.profile.email,
      ...user.profile
    };
  }
  return null;
};

export const getUser = async () => {
  return await userManager.getUser();
};

export const logout = () => {
  return userManager.signoutRedirect();
};