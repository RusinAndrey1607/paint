import { useAppSelector } from 'app/providers/StoreProvider/config/store'
import { getAuthState } from 'entities/Auth/model/selectors/getAuthState/getAuthState'
import { LocalCanvas, RemoteCanvas } from 'entities/Canvas'
import React, { FC } from 'react'

interface CanvasProps {
  
}

const Canvas:FC<CanvasProps> = () => {
  const {isAuth} = useAppSelector(getAuthState)
  return (
    <>
      {isAuth ? <RemoteCanvas /> : <LocalCanvas />}
    </>
  )
}

export default Canvas