import uniqueId from 'lodash/uniqueId'

const keyframesCache: Record<string, string> = {}
export const keyframes = (animation) => {
  const id = uniqueId('keyframes')
  keyframesCache[id] = `@keyframes ${id} {${animation}}`
  return id
}

export const getKeyframes = (id: string) => keyframesCache[id]
