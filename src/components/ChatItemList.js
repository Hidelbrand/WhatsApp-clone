import React from 'react'
import './ChatItemList.css'

const ChatItemList = () => {
  return (
    <div className="chatListItem">
      <img
        className="chatItemList-avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt=""/>
      <div className="chatListItem-lines">
        <div className="chatListItem-line">
          <div className="chatListItem-name">Hidel Santos</div>
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