import { useEffect, useState } from 'react';
// ===== Kiến thức cần biết =====
// Side effect: Là những thay đổi mà component thực hiện ra bên ngoài component.
// Events: Add / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure: Thay đổi biến bên ngoài component
// Timers: setTimeout, setInterval, clearTimeout, clearInterval
// useState
// Mounted / Unmounted: Thực hiện một số thao tác khi component được mount hoặc unmount.
// ========
// Call API


// ==== Một số cách sử dụng useEffect ====
// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render.
// - Gọi callback sau khi component thêm element vào DOM. Tức là sau khi input được thêm vào DOM.

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component được mount.


// 3. useEffect(callback, [deps])
// - Gọi callback mỗi khi deps thay đổi.

// ----------------------------
// ==== Cách dùng chung cho cả 3 loại trên ====
// 1. Callback luôn được gọi sau khi component mounted.
// 2. Cleanup function luôn được gọi trước khi component unmounted.
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted).

const lessions = [
    { id: 1, name: 'Lession 1' },
    { id: 2, name: 'Lession 2' },
    { id: 3, name: 'Lession 3' },
    { id: 4, name: 'Lession 4' },
    { id: 5, name: 'Lession 5' },
]


function Content() {
    const [lessionId, setLessionId] = useState(1);

    useEffect(() => {
        const handleComment = (event) => {
            console.log(event.detail);
        }

        window.addEventListener(`lession-${lessionId}`, handleComment);
        
        return () => {
            window.removeEventListener(`lession-${lessionId}`, handleComment);
        }
    }, [lessionId])

    return (
        <div>
            <ul>
                {lessions.map((lession) => (
                    <li
                        key={lession.id}
                        style={{
                            color: lessionId === lession.id ? 'red' : 'black'
                        }}
                        onClick={() => setLessionId(lession.id)}
                    >
                        {lession.name}
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;