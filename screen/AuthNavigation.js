import React, { useEffect, useState } from 'react'
import { WithAuthNavigation, WithoutAuthNavigation } from './Navigation'
import auth from '@react-native-firebase/auth';

const AuthNavigation = () => {
    const [isLoggined, setIsLoggined] = useState(null);

    const handleUser = user => user ? setIsLoggined(user) : setIsLoggined(null)
    
    useEffect(() => {
        auth().onAuthStateChanged((user) => handleUser(user))
    },[])
  return (
   <>
    {isLoggined ? <WithAuthNavigation/> : <WithoutAuthNavigation/>}
   </>
  )
}

export default AuthNavigation