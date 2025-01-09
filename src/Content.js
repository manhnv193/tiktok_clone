import { useEffect, useState } from 'react';
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render.
// - Gọi callback sau khi component thêm element vào DOM. Tức là sau khi input được thêm vào DOM.

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component được mount.


// 3. useEffect(callback, [deps])
// - Gọi callback mỗi khi deps thay đổi.

// ----------------------------
// Chung
// 1. Callback luôn được gọi sau khi component mounted.
// 2. Cleanup function luôn được gọi trước khi component unmounted.


const tabs = ['posts', 'comments', 'albums', 'photos', 'todos']

function Content() {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(data => {
                setPosts(data)
            })
    }, [type])

    useEffect(() => {

        const handleScroll = () => {
            setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        console.log('add event listener')

        return () => {
            window.removeEventListener('scroll', handleScroll)
            console.log('remove event listener')
        }
    }, [])


    return (
        <div>
            {tabs.map(tab => {
                return (
                    <button
                        key={tab}
                        style={type === tab ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                )
            })}

            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title || post.name}</li>
                })}
            </ul>
            {showGoToTop &&
                <button
                    style={{
                        position: 'fixed',
                        bottom: 20,
                        right: 20
                    }}
                >
                    Go To Top
                </button>}

        </div>
    )
}

export default Content;