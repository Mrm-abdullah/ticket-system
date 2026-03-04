import React from 'react';
import Status from './Status';
import AllTicket from './AllTicket';

const TicketStatus = () => {
    return (
        <div className=' grid md:grid-cols-5 lg:grid-cols-4 pb-8 gap-8 p-2'>
            <div className='order-2 md:order-1 col-span-1 md:col-span-3'>
                <h3 className='text-xl font-bold'>Customer Tickets</h3>
                <AllTicket></AllTicket>
            </div>
            <div className='order-1 md:order-2 md:col-span-2 lg:col-span-1'>
                <Status></Status>
            </div>
        </div>
    );
};

export default TicketStatus;