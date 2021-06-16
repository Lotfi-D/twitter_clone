import React from "react";
import "./sidebarOption.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function SidebarOption(props) {

    let option = <p>Rien</p>
        if(props.text === 'Home') {
            option = <HomeIcon />;
        }
        if(props.text === 'Explore') {
            option = <SearchIcon />;
        }
        if(props.text === 'Notifications') {
            option = <NotificationsNoneIcon />;
        }
        if(props.text === 'Messages') {
            option = <MailOutlineIcon />;
        }
        if(props.text === 'Bookmarks') {
            option = <BookmarkBorderIcon />;
        }
        if(props.text === 'Lists') {
            option = <ListAltIcon />;
        }
        if(props.text === 'Profile') {
            option = <PermIdentityIcon />;
        }
        if(props.text === 'More') {
            option = <MoreHorizIcon />;
        }



  return (
    <div className={`sidebarOption ${props.active && 'sidebarOption--active'}`}>
        <p className="icon_sidebar">{option}</p>
        <h2>{props.text}</h2>
    </div>
  );
}

export default SidebarOption;