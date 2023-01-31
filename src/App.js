import React, {useState, useEffect} from 'react';
import './App.css';
import ChatItemList from './components/ChatItemList';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

const App = () => {
  
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Nana', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 2, title: 'Iris', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 3, title: 'Tiago', image: 'https://www.w3schools.com/howto/img_avatar.png'},
    {chatId: 4, title: 'Isaque', image: 'https://www.w3schools.com/howto/img_avatar.png'}
]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className='app-window'>
      <div className='sidebar'>
        <header>
          <img className='header--avatar' src='https://www.w3schools.com/howto/img_avatar.png' alt=''/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>
        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize='small' style={{color: '919191'}} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa'/>
          </div>
        </div>
        <div className='chatlist'>
          {chatList.map((item, key)=>(
            <ChatItemList 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={()=>setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
            {activeChat.chatId !== undefined && 
              <ChatWindow />
            }
            {activeChat.chatId === undefined &&
              <ChatIntro/>
            }
      </div>
    </div>
  )
}

export default App