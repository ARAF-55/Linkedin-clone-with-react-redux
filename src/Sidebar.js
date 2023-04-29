import React from "react";
import './Sidebar.css';
import { Avatar } from "@mui/material";

function Sidebar() {

    const recentItem = topic => {
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
            <p>{topic}</p>
        </div>;
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Mahfujur Rahman</h2>
                <h4>arafmahfuzur5555@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2243</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react-js')}
                {recentItem('python DSA')}
                {recentItem('CSS')}
                {recentItem('JavaScript')}
                {recentItem('Git and Github')}
            </div>
        </div>
    );
}

export default Sidebar;