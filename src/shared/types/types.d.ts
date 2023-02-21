/* eslint-disable no-unused-vars */
type AnyObject = Record<string, any>

type ObjectKey<T> = keyof T

type ObjectValue<T> = T[keyof T]

type Prettify<T> = {
  [k in keyof T]: T[k]
}
