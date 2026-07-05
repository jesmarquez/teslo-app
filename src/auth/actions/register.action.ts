import { tesloApi } from "../../api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const registerAction = async (fullname: string, email: string, password: string):Promise<AuthResponse>  => {
  
  try {
    const { data } = await tesloApi.post<AuthResponse>('/auth/register', {
      email: email,
      password: password,
      fullName: fullname,
    });
    return data;
  } catch (error) {
    console.log({ error });
    throw(error);
  }
  
}