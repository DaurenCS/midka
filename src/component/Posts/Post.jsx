import React, { useState } from "react";

import "./Post.css"


function Posts() {
    const [theme, setTheme] = useState('');
  const [describe, setDescribe] = useState('');
  

    const posts = [{
        name: 'Dauren',
        theme: 'Post2',
        describe: 'Hi its 1 post'
    },
    {
        name: 'Dauren1',
        theme: 'Post1',
        describe: 'Hi its 2 post'
    },
    {
        name: 'Dauren2',
        theme: 'Post2',
        describe: 'Hi its 3 post'
    },
    {
        name: 'Dauren3',
        theme: 'Post2',
        describe: 'Hi its 4 post'
    },

]
const addPost = (theme,describe) => {
    posts.push({theme:{theme}, describe:{describe}})
    console.log(posts)
}
const deletePost = (curpost) => {
    const deleteposts = posts.filter((post)=> {
        return post == curpost
    })
    posts.pop(deleteposts)
}
    
    

    return(
        <>
        <div className="posts">
        <h1>Hi</h1>
        {posts.map((post)=>(
                <div className="post">
                    {post.name}<br/>
                    {post.theme}
                    <button onClick={deletePost}>Delete</button>
                </div>
                
            ))}            
        
        </div>
        <div className="add Post">
        <form onSubmit={addPost} className="login-form">
        <h3>Postname</h3>
        <input
            type="text"
            id="username"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}

          />
        <h3>Describe</h3>

          <input
            type="text"
            id="username"
            value={describe}
            onChange={(e) => setDescribe(e.target.value)}

          />
            <button type="submit">add</button>
        </form>
        </div>
        </>
        
        
    )
}

export default Posts