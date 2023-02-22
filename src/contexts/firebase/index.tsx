import firebase from 'firebase'
import { Context, createContext, FC } from 'react'
import { ReactNode } from 'react'
import { auth, firestore } from '@/configs/firebase'

interface IFirebaseContext {
  auth: firebase.auth.Auth
  firestore: firebase.firestore.Firestore
}

interface IReactNode {
  children: ReactNode
}

const FirebaseContext: Context<IFirebaseContext> = createContext<IFirebaseContext>({
  auth,
  firestore,
})

export { FirebaseContext }
export type { IFirebaseContext }

export const FirebaseProvider: FC<IReactNode> = ({ children }: IReactNode) => {
  return (
    <FirebaseContext.Provider
      value={{
        auth,
        firestore,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  )
}
