import React, { useState } from 'react';
import './newChat.css'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export default ({user, chatlist, show, setShow}) => {
    const [list, setList] = useState([
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name: 'Bony'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name: 'Bony'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name: 'Bony'},
        {id: 123, avatar:'https://www.w3schools.com/howto/img_avatar.png', name: 'Bony'}
    ])

    const handleClose = () => {
        setShow(false)
    }
    
  return (
    <div className='NewChat' style={{left: show?0:-415}}>
        <div className='head'>
            <div onClick={handleClose} className='back-button'>
                <KeyboardBackspaceIcon style={{color: '#fff'}}/>
            </div>
            <div className='headTitle'>Nova Conversa</div>
        </div>
        <div className='list'>
            {list.map((item, key)=>(
                <div className='newChatItem' key={key}>
                     <img className='itemAvatar' src={item.avatar} alt=''/>   
                     <div className='itemName'>{item.name}</div>
                </div>
            ))}
        </div>
    </div>
  )
}



