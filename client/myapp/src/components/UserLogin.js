import React, { useState } from 'react'
import _ from "lodash"
import CommentOutLined from '@ant-design/icons'

const button = {
    width: '10%',
    height: 50 ,
    fontWeight: 'bold',
    borderRadius: 10,
    fontSize: 18,
    backgroundColor: '#34b7f1',
    borderWidth:0,
    color:'#fff'
}

function UserLogin({setUser}) {

    const [user, setAUser] = useState('')

    function handleSetUser(){
        if(!user) return
        localStorage.setItem("user", user)
        setUser(user)
        localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1,1000)}/200/300`)
        const userColor = getColor()
        localStorage.setItem('color',userColor)
        
    }

    function getColor(){
        const getRandomColor = () => Math.floor(Math.random() * 198); 
        const red = getRandomColor();
        const green = getRandomColor();
        const blue = getRandomColor();

        const randomColor = `rgb(${red}, ${green}, ${blue})`;

        return randomColor;

    }

    return (
        <div>
            <h1 style={{margin:10, textAlign:'center'}}><CommentOutLined color={'green'}/>
                Supper Chat
            </h1>
            <div style={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                <input
                    style={{margin: 10, height: 30, width: '25%', borderRadius: 10, borderWidth: 10, fontSize: 10}}
                    placeholder='Write random name'
                    value={user}
                    onChange={(e)=>setAUser(e.target.value)}
                ></input>
                <button
                    onClick={()=>handleSetUser()}
                    style={button}>
                        LOGIN
                </button>
            </div>
            
        </div>
    )
}

export default UserLogin
