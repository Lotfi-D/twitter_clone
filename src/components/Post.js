import React from 'react';
import './css/Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Avatar } from "@material-ui/core";

function Post(props) {
    
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src={props.avatar} />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                         {props.displayName}{" "}
                            <span className="post_headerSpecial">
                            {props.verified && <VerifiedUserIcon className="post_badge" />} 
                            @{props.username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{props.text}</p>
                    </div>
                    <img src={props.image} alt="" />
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
