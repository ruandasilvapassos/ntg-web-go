import { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'

export const useHeaderHeight = (id = 'MAIN_HEADER') => {
  const [height, setHeight] = useState(80)
  const { y } = useWindowScroll()

  useEffect(() => {
    const header = document.getElementById(id)
    if (header) {
      setHeight(header.getBoundingClientRect().height)
    }
  }, [y])

  return height || 0
}
