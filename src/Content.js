import { useEffect, useState } from 'react';
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render.
// - Gọi callback sau khi component thêm element vào DOM. Tức là sau khi input được thêm vào DOM.



function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts)
        })
    })



    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;