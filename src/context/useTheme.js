import React, {useContext} from 'react'
import { ThemeContext } from './themeContext'
export function useTheme(){
  const ctx = useContext(ThemeContext)

  if(!ctx) {
    throw new Error('useTheme는 반드시 TheeProvider 안에서 실행')
  }

  return ctx
}