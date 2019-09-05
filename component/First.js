import React from 'react';
import {Link} from 'react-router-dom';

const First = (props) => {
    return (
    <React.Suspense fallback={<div>Loading...</div>}>
        First Component<br></br>
        <Link to='/next'>Next</Link>
    </React.Suspense>
    )
    
}

export default First;