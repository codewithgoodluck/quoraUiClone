import React from 'react'
import '../styles/Post.css'
import { Avatar } from "@material-ui/core";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

function Post() {
  return (
    <div className='post'>
      <div className='post_info'>
        <Avatar></Avatar>
        <h5>Username</h5>
        <small>Timestamp</small>

      </div>
      <div className='post_body'>
        <div className='post_question'>
          <p>Questions</p>
          <button className='post_btn_answer'>Answer</button>
        </div>
        <div className='post__answer'>
          <p>
 
          </p>
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFMbzuiwCMO5w/profile-displayphoto-shrink_100_100/0/1641271914049?e=1661990400&v=beta&t=uckosDzbQxL5Mf1ZJDE2OSo-AZTovOnXmuL_9xSfgsI" alt="" />
        </div>
        <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlinedIcon />
          <ArrowDownwardOutlinedIcon />
        </div>

        <RepeatOutlinedIcon />
        <ChatBubbleOutlineOutlinedIcon />
        <div className="post__footerLeft">
          <ShareOutlined />
          <MoreHorizOutlined />
        </div>
      </div>
    </div>

      </div>
    
  )
}

export default Post