import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ACTIVATE_USER } from '../../actions/actions';

const ActivateUser = () => {
    const {uid, token} = useParams()
    const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>()
    const navigate = useNavigate()

    useEffect(() => {
        if (uid && token) dispatch(ACTIVATE_USER(navigate, uid, token))
    }, [uid, token])
    
  return (
    <div>
      Hello
    </div>
  )
}

export default ActivateUser

// NzAyMA/bu48jv-c196d9dbaef54837ac5eea01d9c90cbf