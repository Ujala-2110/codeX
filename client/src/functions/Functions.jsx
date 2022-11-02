import React from 'react'
import "./functions.scss"
import {Code,Lock,Schedule,CommentOutlined} from "@material-ui/icons"

function Functions() {
  return (
    <div className="func">
        <ul>
            <li><Code  className="icons"/> Problem</li>
            <li><Lock  className="icons"/> Solution</li>
            <li><Schedule  className="icons"/> Submissions</li>
            <li><CommentOutlined  className="icons"/> Discuss</li>
        </ul>
    </div>
  )
}

export default Functions