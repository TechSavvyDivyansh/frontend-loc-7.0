'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useUser } from "@clerk/nextjs";

// Create context
const myHackContext = createContext();

export function HackWrapper({ children }) {
  const { user, isSignedIn } = useUser();
  const [MyUserData, setMyUserData] = useState(null);

  useEffect(() => {
    if (isSignedIn && user) {
      setMyUserData({
        id: user.id,
        fname: user.firstName,
        lname: user.lastName,
        email: user.primaryEmailAddress?.emailAddress,
        avatar: user.imageUrl,
      });
    }
  }, [user, isSignedIn]);

  return (
    <myHackContext.Provider value={{ MyUserData }}>
      {children}
    </myHackContext.Provider>
  );
}

export const useMyHackContext = () => useContext(myHackContext);
