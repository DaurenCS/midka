import React from "react";


function Posts() {

    const posts = []
    
    const addPost = (post) = {
        
        
    }

    return(
        <div className="posts">
        <h1>Hi</h1>
            {posts.map((post)=>(
                <>
                <div>
                    {post.name}
                </div>
                </>
            ))}
        </div>
    )
}

export default Posts