import React from 'react'
import App from './App'
import {NonResponsive} from './NonResponsive'
import { useEffect } from 'react'

export const ResponsiveApp = () => {
    var getWindowsWidth = window.innerWidth;
    var getWindowsHeight = window.innerHeight;
    const getDimensions = ()=>{
        getWindowsWidth = window.innerWidth;
        getWindowsHeight = window.innerHeight;
    }
    useEffect(() => {
        window.addEventListener('resize', () => {
            getDimensions();
            console.log(getWindowsWidth, getWindowsHeight);
        })}, [window.innerWidth, window.innerHeight]);

  return (
    <>
        {(getWindowsWidth>1400 && getWindowsHeight>100) ? <App/> : <NonResponsive/>}
    </>
  )
}
