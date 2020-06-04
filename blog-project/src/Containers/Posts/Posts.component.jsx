import React from 'react'
import SideBar from '../../Components/SideBar/SideBar.component'
import BlogPost from '../../Components/Blog Post/BlogPost.component'
import Styles from './Post.module.css'

function Posts() {
    return (
        <div className={Styles.postsContainer}>
            <BlogPost/>
            <SideBar/>
        </div>
    )
}

export default Posts
