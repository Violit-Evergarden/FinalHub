'use client'
import { useState } from 'react';
import useColorMode from '@/src/hooks/useColorMode';
import light_icon from './icons/light.svg'
import dark_icon from './icons/dark.svg'
import './index.scss'


function ColorMode(){
  const [colorMode, toggleMode] = useColorMode()

  // 判断是否支持 startViewTransition API
  const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  
  

  async function toggleTheme({ clientX: x, clientY: y }: MouseEvent){
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
    <div onClick={toggleTheme}>
      <img className='h-5 w-5 select-none' src={colorMode === 'light' ? light_icon.src : dark_icon.src} />
    </div>
  )
}

export default ColorMode;
