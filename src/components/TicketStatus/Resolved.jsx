import React from 'react';

const Resolved = ({resolved}) => {
    // console.log(resolved)
    return (
        <div>
            <p className='bg-[#E0E7FF] text-black p-4 my-4  w-full rounded'>{resolved.title} </p>
        </div>
    );
};

export default Resolved;