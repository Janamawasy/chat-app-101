import React, { useState } from 'react';
import {Avatar, Image} from 'antd'

export default function ChatBoxReciever({avatar, user, message, color}) {
    console.log('hhh', avatar, user, color)
    return (
        <div style={{display:'flex', justifyContent:'flex-start', flexDirection:'row'}}>
            <Avatar
                size={50}
                src={<Image
                    src={avatar}
                    style={{
                        objectFit: 'cover',
                        width:45,
                        height:45,
                        borderRadius: "100%"
                    }}
                    preview={false}
                />}
            />
        <p style={{padding:10, backgroundColor: color, borderRadius: 10, maxWidth: "60%", borderColor: '#bec2c1', borderWidth: 1, borderStyle: 'solid'}}>
            <strong style={{fontSize:13}}>
                {user}
            </strong><br/><br/>
            {message}
        </p>

        </div>
    )
}


export function ChatBoxSender({avatar, user, message}) {
    console.log(avatar, user)
    return (
        <div style={{display:'flex', justifyContent:'flex-end', flexDirection:'row'}}>
            <Avatar
                size={50}
                src={<Image
                    src={avatar}
                    style={{
                        objectFit: 'cover',
                        width:45,
                        height:45,
                        borderRadius: "100%"
                    }}
                    preview={false}
                />}
            />
        <p style={{padding:10, background:'#fff', borderRadius: 10, maxWidth: "60%"}}>
            <strong style={{fontSize:13}}>
                {user}
            </strong><br/><br/>
            {message}
        </p>

        </div>
    )
}

