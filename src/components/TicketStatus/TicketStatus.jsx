import React from 'react';
import Status from './Status';

const TicketStatus = () => {
    return (
        <div className='grid grid-cols-4 pb-8'>
            <div className='col-span-3'>
                <h3 className='text-xl font-bold'>Customer Tickets</h3>
            </div>
            <div className='col-span-1'>
                <Status></Status>
            </div>
        </div>
    );
};

export default TicketStatus;