import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth.store";

const useAuth = () => {
  const { setUser, isLoading, setLoading, error, setError } = useAuthStore();
  const navigate = useNavigate();

  const singUp = async (email: string, password: string) => {
    setLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
        setUser(res.user);
        setLoading(false);
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => setLoading(false));
  };

  const singIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/");
        setUser(res.user);
      })
      .catch((error) => {
        const result = error as Error;
        setError(result.message);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        setUser({} as User)
        navigate('/auth')
      })
      .catch((err) => {
        const result = err as Error;
        setError(result.message);
      })
      .finally(() => setLoading(false));
  };

  return { singIn, singUp, logout, isLoading, error };
};

export default useAuth;
