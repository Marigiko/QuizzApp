import { Context, createContext, useContext, useEffect, useState } from 'react';
import { addUser } from '../utils/db';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { firebase } from './firebase';

interface Auth {
  uid: string;
  email: string | null;
  name: string | null;
  photoUrl: string | null;
  token: string | null;
}

interface AuthContext {
  auth: Auth | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const authContext: Context<AuthContext> = createContext<AuthContext>({
  auth: null,
  loading: true,
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

const formatAuthState = (user: User): Auth => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
  photoUrl: user.photoURL,
  token: null,
});

function useProvideAuth() {
  const [authState, setAuthState] = useState<Auth | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAuthChange = async (user: User | null) => {
    if (!user) {
      setLoading(false);
      return;
    }
    const formattedAuth = formatAuthState(user);
    formattedAuth.token = await user.getIdToken();
    setAuthState(formattedAuth);
    setLoading(false);
  };

  const signedIn = async (
    response: User,
    provider: string = 'google'
  ) => {
    const authUser = formatAuthState(response);
    await addUser({ ...authUser, provider });
  };

  const clear = () => {
    setAuthState(null);
    setLoading(true);
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(getAuth(firebase), provider).then((result) => {
      if (result.user) {
        signedIn(result.user);
      }
    });
  };

  const handleSignOut = async () => {
    const authInstance = getAuth(firebase);
    return signOut(authInstance).then(clear);
  };

  useEffect(() => {
    const authInstance = getAuth(firebase);
    const unsubscribe = onAuthStateChanged(authInstance, handleAuthChange);
    return () => unsubscribe();
  }, []);

  return {
    auth: authState,
    loading,
    signInWithGoogle,
    signOut: handleSignOut,
  };
}

export function AuthProvider({ children }: any) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => useContext(authContext);
