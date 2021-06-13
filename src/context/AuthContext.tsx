import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

interface UserContextType {
  user: CognitoUser | null;
  setUser: Dispatch<SetStateAction<CognitoUser>>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen("auth", () => {
      // perform some action to update state whenever an auth event is detected.
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setUser(amplifyUser);
    } catch (error) {
      // No current signed in user.
      console.error(error);
      setUser(null);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
