import React from 'react';
import './css/Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";

function Post( displayName, username, verified, text, image, avatar ) {
    
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {/* {displayName}{" "}
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />} @
                            {username}
                        </span> */}
                         <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />} @
                            Lotfi D
                        </span> 
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>blablabla{text}</p>
                    </div>
                    <img src="https://sm.ign.com/t/ign_fr/news/a/ash-ketchu/ash-ketchum-finally-becomes-a-pokemon-league-champion_5mfu.1280.jpg" alt="" />
                    <div className="post_footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
