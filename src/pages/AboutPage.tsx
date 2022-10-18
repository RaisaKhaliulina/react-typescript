import React from "react";
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Страница информации</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta quo dolor tempora neque iste reiciendis eveniet natus dolorum, fugit excepturi?</p>
      <button 
          className="btn"
          onClick={() => history.push('/')}>
             Обратно к списку дел
      </button>
    </>
  )
}