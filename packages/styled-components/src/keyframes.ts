import uniqueId from 'lodash/uniqueId'

const keyframesCache: Record<string, string> = {}
export const keyframes = (strings) => {
  const [animation] = strings
  const id = uniqueId('keyframes')
  keyframesCache[id] = `@keyframes ${id} {${animation}}`
  return id
}

export const getKeyframes = (id: string) => keyframesCache[id]
