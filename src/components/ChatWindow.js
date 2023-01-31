import React from 'react'
import './ChatWindow.css'
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';



const ChatWindow = ({data}) => {
  return (
    <div className='chatWindow'>
        <div className='chatWindowHeader'>
            <div className='headerInfo'>
                <img className='avatar' src='https://www.w3schools.com/howto/img_avatar.png'/>
                <div className='name'>Nana</div>
            </div>

            <div className='header-buttons'>
                <div className='chat-btn'>
                    <SearchIcon style={{color: '#919191'}}/>
                </div>
                <div className='chat-btn'>
                    <AttachFileIcon style={{color: '#919191'}}/>
                </div>
                <div className='chat-btn'>
                    <MoreVertIcon style={{color: '#919191'}}/>
                </div>
            </div>
        </div>
        <div className='chatWindowBody'>

        </div>
        <div className='chatWindowFooter'>
            <div className='pre'>
                <div className='chat-btn'>
                    <InsertEmoticonIcon style={{color: '#919191'}}/>
                </div>
            </div>
            <div className='input-area'>
                <input className='input' type='text' placeholder='Digite uma mensagem'/>
            </div>
            <div className='pos'>
            <div className='chat-btn'>
                    <SendIcon style={{color: '#919191'}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChatWindow