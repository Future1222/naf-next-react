import React, { createContext, useEffect, useState, ReactNode, FC } from 'react'
import { auth } from '@/configs/firebase'
import firebase from 'firebase'

interface IAuthContext {
  currentUser: firebase.User | null
}

interface IReactNode {
  children: ReactNode
}

const AuthContext = createContext<IAuthContext>({ currentUser: null })

export const AuthProvider: FC<IReactNode> = ({ children }: IReactNode) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}
