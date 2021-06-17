import React from 'react';
import './css/Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import {Button} from "@material-ui/core";


function Sidebar() {
    return (
        <div className="sidebar">
            {/*Twitter icon */}
            <TwitterIcon className="twitterIcon_sidebar"/>

            <SidebarOption active text="Home" />
            <SidebarOption text="Explore" />
            <SidebarOption text="Notifications" />
            <SidebarOption text="Messages" />
            <SidebarOption text="Bookmarks" />
            <SidebarOption text="Lists" />
            <SidebarOption text="Profile" />
            <SidebarOption text="More" />
            {/*SidebarOption */}
            {/*SidebarOption */}
            {/*SidebarOption */}
            {/*SidebarOption */}
            {/*SidebarOption */}
            {/*SidebarOption */}
            {/*SidebarOption */}

            {/*Button */}
            <Button variant="outlined" className="tweet_sidebar" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;