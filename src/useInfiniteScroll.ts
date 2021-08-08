import { useEffect, useCallback } from 'react'
import { PayloadAction } from '@reduxjs/toolkit'

import { useAppDispatch } from './app/hooks'

export default function useInfiniteScroll(callback: PayloadAction) {
  const dispatch = useAppDispatch()

  const isScrolling = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return
    } else {
      console.log('scrolling down')
      dispatch(callback)
    }
  }, [dispatch, callback])

  useEffect(() => {
    window.addEventListener('scroll', isScrolling)
    return () => window.removeEventListener('scroll', isScrolling)
  }, [isScrolling])
}
