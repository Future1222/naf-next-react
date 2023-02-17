import React, { createContext, useEffect, useState, ReactNode } from 'react'
import { auth } from '@/configs/firebase'
import firebase from 'firebase'

interface AuthContextType {
  currentUser: firebase.User | null
}

interface Properties {
  children: ReactNode
}

const AuthContext = createContext<AuthContextType>({ currentUser: null })

export const AuthProvider = ({ children }: Properties) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}
