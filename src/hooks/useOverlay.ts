import { useCallback, useEffect, useState } from 'react'

const useOverlay = () => {
  const [overlayEl, setOverlayEl] = useState<HTMLDivElement>()

  useEffect(() => {
    const el = document.createElement('div')
    el.style.position = 'fixed'
    el.style.inset = '0px'
    el.style.background = 'rgba(0,0,0,.5)'
    el.style.zIndex = '999'
    setOverlayEl(el)
  }, [])

  const toggle = useCallback(() => {
    if (overlayEl) {
      if (document.body.contains(overlayEl)) {
        document.body.removeChild(overlayEl)
      } else {
        overlayEl.addEventListener('click', () => document.body.removeChild(overlayEl))
        document.body.appendChild(overlayEl)
      }
    }
  }, [overlayEl])
  return { toggle }
}

export default useOverlay
