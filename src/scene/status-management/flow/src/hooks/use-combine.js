import { useMemo } from 'react'

const useCombine = (sourceArr, onChange) => {
  return useMemo(() => {
    onChange(sourceArr)
  }, sourceArr)
}

export default useCombine