import { useLayoutEffect, useEffect, useState, memo } from 'react';

function Content({count}) {

    console.log('Content render');
    return (
        <div style={{ marginRight: 10 }}>
            <h1>Hello AE!! {count}</h1>
        </div>
    )
}

export default memo(Content);