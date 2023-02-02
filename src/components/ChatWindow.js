import React, {useState} from 'react';
import './ChatWindow.css';
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';
import MessageItem from './MessageItem';



const ChatWindow = () => {

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(SpeechRecognition !== undefined) {
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [list, setList] = useState([{}, {}, {}]);

    const handleEmojiclick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if(recognition !== null) {
            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript)
            }
            recognition.start();
        }
    }

    const handleSendClick = () => {

    }

  return (
    <div className="chatWindow">
      <div className="chatWindowHeader">
        <div className="headerInfo">
          <img
            className="avatar"
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
          <div className="name">Nana</div>
        </div>

        <div className="header-buttons">
          <div className="chat-btn">
            <SearchIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-btn">
            <AttachFileIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-btn">
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindowBody">
        {list.map((item, key)=>(
            <MessageItem 
                key={key}
                data={item}
            />
        ))}
      </div>
      <div
        className="emojiArea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiclick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindowFooter">
        <div className="pre">
          <div
            className="chat-btn"
            onClick={handleCloseEmoji}
            style={{ width: emojiOpen ? 40 : 0 }}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chat-btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon
              style={{ color: emojiOpen ? "#009688" : "#919191" }}
            />
          </div>
        </div>
        <div className="input-area">
          <input
            className="input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e=>setText(e.target.value)}
          />
        </div>

        <div className="pos">
            {text === '' && 
                <div onClick={handleMicClick} className="chat-btn">
                    <MicIcon style={{ color: listening? '#126ece' : "#919191" }} />
                </div>
            }
            {text !== '' && 
                <div onClick={handleSendClick} className="chat-btn">
                    <SendIcon style={{ color: "#919191" }} />
                </div>
            }
        </div>
      </div>
    </div>
  );
}

export default ChatWindow