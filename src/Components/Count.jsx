import {memo} from 'react'

const Count = ({count , text })=> {
    console.log(`rendering ${text}`);
    return (
        <>
            <div>
                {text} - {count}
            </div>
        </>
    )
}


export default memo(Count) ;