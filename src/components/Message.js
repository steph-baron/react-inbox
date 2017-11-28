import React from 'react';

// Map array to message component

const Message = ({ message, toggleStar, toggleSelect}) => {
  const starClass = message.starred ? 'fa-star' : 'fa-star-o'
  const selectedClass = message.selected ? 'selected' : ""

  const starMessage = (e) => {
    e.stopPropagation()
    toggleStar(message)
  }

  const checkBox = (e) => {
    e.stopPropagation()
    toggleSelect(message)
  }

  // const expandedMessage = (e) => {
  //   e.stopPropagation()
  //   messageExpanded(message)
  // }

  return (

    <div className={`row message ${selectedClass}`} >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2" onClick={ checkBox }>
            <input type="checkbox" readOnly={ true } checked={ !!message.selected }/>
          </div>
          <div className="star-container col-xs-2" onClick={ starMessage }>
            <i className={`star fa ${starClass}`}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <span className="label label-warning">dev</span>
        <span className="label label-warning">gschool</span>
        {message.subject}
      </div>
    </div>

    
    // <div class="row message-body">
    //   <div class="col-xs-11 col-xs-offset-1" onClick={ expandedMessage }>
    //     This is the body of the message.
    //   </div>
    // </div>

  )
}

export default Message
