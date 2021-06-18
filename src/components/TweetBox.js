import React, { useState } from 'react';
import './css/TweetBox.css';
import {Avatar, Button} from '@material-ui/core';
import db from '../firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const sendTweet= (e)=>{
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Zinedine Zidane",
            username:"ZZ",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/684869598194302976/mPoV1q0H_400x400.jpg",
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                <Avatar src="https://pbs.twimg.com/profile_images/684869598194302976/mPoV1q0H_400x400.jpg" />
                <input 
                onChange={(e)=> setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?" 
                type="text"/>
                </div>
                <input 
                onChange={(e)=> setTweetImage(e.target.value)}
                value={tweetImage} 
                className= "tweetBox_imageInput"
                placeholder="Enter image URL"
                type="text"/>

                <Button 
                onClick={sendTweet}
                className="tweetBox_tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
