import { useEffect, useState } from 'react'

export const useIsMobile = (): boolean => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleWidthChange = () => {
      setWidth(window.innerWidth)
    }

    if (window) {
      setWidth(window.innerWidth)

      window.addEventListener('resize', handleWidthChange)
    }

    return () => removeEventListener('resize', handleWidthChange)
  }, [])

  return width <= 768
}
