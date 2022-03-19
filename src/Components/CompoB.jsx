import {useContext} from 'react';

import{userContext} from '../Components/App'

function CompoB(){
    const name = useContext(userContext)

    return (
        <div className="CompoB">
            <h3>
                this is child of componnet A
            </h3>
            <h4>{name}</h4>
        </div>
    )
}

export default CompoB ;