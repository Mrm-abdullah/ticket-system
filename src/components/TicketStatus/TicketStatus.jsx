import React, { use, useState } from 'react';
import Status from './Status';
import AllTicket from './AllTicket';
import { toast } from 'react-toastify';

const TicketStatus = ({ticketPromise, setInProgress, inProgress, resolved, setResolved}) => {

    const ticketPromiseData = use(ticketPromise)
    // console.log(ticketPromiseData)

    const [tasks, setTasks] = useState([])

    const handleTask = (ticket) => {
        // console.log(ticket)
        setTasks([...tasks, ticket])
        const Progress = inProgress + 1
        setInProgress(Progress)
        toast("Task added")
        
    }
    console.log(tasks)
    return (
        <div className=' grid md:grid-cols-5 lg:grid-cols-4 pb-8 gap-8 p-2'>
            <div className='order-2 md:order-1 col-span-1 md:col-span-3'>
                <h3 className='text-xl font-bold'>Customer Tickets</h3>
                <div className='py-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        ticketPromiseData.map((ticket) => <AllTicket handleTask={handleTask} ticket={ticket} key={ticket.id}></AllTicket>)
                    }
                </div>
            </div>
            <div className='order-1 md:order-2 md:col-span-2 lg:col-span-1'>
                <Status tasks={tasks} resolved={resolved} setResolved={setResolved}></Status>
            </div>
        </div>
    );
};

export default TicketStatus;