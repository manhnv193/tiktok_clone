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


function Content() {
    const [countDown, setCountDown] = useState(180)

    useEffect( () => {
        const timerId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000)


        return () => {
            clearInterval(timerId)
        }

    }, [])

    return (
        <div>
            {countDown}
        </div>
    )
}

export default Content;