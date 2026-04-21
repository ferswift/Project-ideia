import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Firebase";

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return auth.signOut();
};
