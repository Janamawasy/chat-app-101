import React, { useEffect, useState } from 'react'
import sockcketIOClient from 'socket.io-client'
import UserLogin from './UserLogin'
import ChatBoxReciever, { ChatBoxSender } from './ChatBox'
import InputText from './InputText'

function ChatContainer() {

    let socketio = sockcketIOClient('http://localhost:5000')
    const [chats, setChats] = useState([])
    const [user, setUser] = useState(localStorage.getItem('user'))
    const avatar = localStorage.getItem('avatar')
    const color = localStorage.getItem('color')


    useEffect(()=>{
        socketio.on('chat',senderChats => {
            setChats(senderChats)
        })
        console.log(chats)
    })

    function sendChatToSocket(chat){
        socketio.emit("chat", chat)
    }

    function addMessage(chat){
        const newChat = {...chat, user, avatar, color}
        setChats([...chats, newChat])
        sendChatToSocket([...chats, newChat])
    }

    function LogOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('avatar')
        localStorage.removeItem('color')
        setUser('')
    }

    function ChatList(){
        return chats.map((chat, index) => {
            if (chat.user === user) return <ChatBoxSender key={index} message={chat.message} avatar={avatar} user={chat.user}/>
            return <ChatBoxReciever key={index} message={chat.message} avatar={chat.avatar} user={chat.user} color={chat.color}/>
        })
    }

    return (
        <div>
        { user?
        <div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                <h4>UserName: {user} </h4>
                <p onClick={()=>LogOut()} style={{color:'blueviolet', cursor:'pointer'}}>LOGOUT</p>
            </div>
            <ChatList/>
            <InputText addMessage={addMessage}/>
        </div>:
        <UserLogin setUser={setUser}/>
        }
        </div>

    )
}

export default ChatContainer
