"use client";

import type React from "react";
import {
  type ReactNode,
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Profile = {
  user: {
    _id: string;
    name: string;
    email: string;
    userRole: string;
    tokens: { accessToken: string; refreshToken: string };
  };
};

type UserContext = {
  profile: Profile | null;
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>;
};

export const UserContext = createContext<UserContext>({
  profile: null,
  setProfile: () => {
    throw new Error("Function not implemented.");
  },
});

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  /* Theme Toggling Function */

  const context: UserContext = useMemo(
    () => ({
      profile,
      setProfile,
    }),
    [profile]
  );

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};
