'use client'
import { useState } from 'react';
import useColorMode from '@/src/hooks/useColorMode';
import light_icon from '@/src/assets/images/icons/light.svg'
import dark_icon from '@/src/assets/images/icons/dark.svg'

function ColorMode(){
  const [colorMode, toggleMode] = useColorMode()

  // 判断是否支持 startViewTransition API
  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

  async function toggleTheme(event: React.MouseEvent){
    const { clientX: x, clientY: y } = event;
    const isDark = colorMode === 'dark';
    console.log(enableTransitions())
    if(!enableTransitions()) return toggleMode()
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      )}px at ${x}px ${y}px)`
    ]

    await document.startViewTransition(async () => {
      toggleMode()
    }).ready

    document.documentElement.animate(
      { clipPath: !isDark ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${!isDark ? 'old' : 'new'}(root)`
      }
    )
  }

  return (
    <div className='w-32 h-32 flex justify-center items-center rounded-half cursor-pointer hover:bg-btn_hover_bg' onClick={toggleTheme}>
      <img className='w-20 h-20 select-none' src={colorMode === 'light' ? light_icon.src : dark_icon.src} />
    </div>
  )
}

export default ColorMode;
