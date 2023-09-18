import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../style.css'

const Tab = ({text}: {text: string}) => {
  const dispatch = useDispatch()
  const activeTab = useSelector(({activeTab}) => activeTab)

  return (
    <div
      className={`tabs__tab ${activeTab === text ? "active-tab" : ""}`}
      onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: text })}
    >
      {text}
    </div>
  );
}

export default Tab
