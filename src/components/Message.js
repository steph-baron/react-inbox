import React from 'react';

// Map array to message component

const Message = ({ message, toggleStar}) => {
  const starClass = message.starred ? 'fa-star' : 'fa-star-o'

  const starMessage = (e) => {
    e.stopPropagation()
    toggleStar(message)
  }

  return (
    <div className="row message">
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox"/>
          </div>
          <div className="star-container col-xs-2" onClick={ starMessage }>
            <i className={`star fa ${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {message.subject}
      </div>
    </div>
  )
}

export default Message
