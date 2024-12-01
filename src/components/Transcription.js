import React from 'react';

function Transcription({content}) {
    return ( 
        <>
            <div className='overflow-y-auto '>
                <p>{content}</p>
            </div>
        </>
    );
}

export default Transcription;