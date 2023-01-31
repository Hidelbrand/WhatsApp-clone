import React from 'react'
import './ChatItemList.css'

const ChatItemList = ({onClick, active, data}) => {
  return (
    <div className={`chatListItem ${active?'active':''}`}
          onClick={onClick}
    >
      <img
        className="chatItemList-avatar"
        src={data.image}
        alt=""/>
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">{data.title}</div>
          <div className="chatItemList-date">19:35</div>
        </div>
        <div className="chatListItem-line">
          <div className="chatListItem-lastMsg">
            <p>Opa, tudo bem! testando escondendo a barra de rolagem do chat e a quebra de linha.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatItemList