// it is faster than { ...obj }
export const shallowClone = <T extends {}>(obj: T) => {
  const clone = {} as T
  for (const key in obj) {
    clone[key] = obj[key]
  }
  return clone
}
