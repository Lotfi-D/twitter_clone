import React from 'react';
import './css/Middlepage.css';
import TweetBox from './TweetBox'
import Post from './Post'

function MiddlePage() {
    return (
        <div className="middlepage">
           {/* Header */}
            <div className="middlepage_header">
                <h2 >Home</h2>
            </div>
           {/* Tweetbox */} 
            <TweetBox />

            <Post />
           {/* Post */} 
           {/* Post */} 
           {/* Post */} 
           {/* Post */} 
           {/* Post */} 
           {/* Post */} 

        </div>
    )
}

export default MiddlePage
