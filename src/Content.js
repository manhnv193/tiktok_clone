import { useLayoutEffect, useEffect, useState, memo } from 'react';

function Content({ onIncrease }) {

    console.log('Content render');
    return (
        <div style={{ marginRight: 10 }}>
            <>
                <h1>Hello AE!!</h1>
                <button onClick={onIncrease}>Click me!</button>
            </>
        </div>
    )
}

export default memo(Content);