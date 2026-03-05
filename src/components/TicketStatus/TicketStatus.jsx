import React, { use, useState } from 'react';
import Status from './Status';
import AllTicket from './AllTicket';
import { toast } from 'react-toastify';

const TicketStatus = ({ticketPromise, setInProgress, inProgress, resolved, setResolved}) => {

    const ticketPromiseData = use(ticketPromise)
    const [ticketData, setTicketData] = useState([...ticketPromiseData])

    const [tasks, setTasks] = useState([])
    const handleTask = (ticket) => {
        // console.log(ticket.id)
        const t = tasks.find(t => t.id == ticket.id)
        if (t) {
            toast("Task Already added")
        } else {
            setTasks([...tasks, ticket])
            const newInProgress = inProgress + 1
            setInProgress(newInProgress)
            toast("Task added")
        }
    }

    const [resolvedTask, setResolvedTask] = useState([])
    const handleResolvedTask = (reTask) => {
        const newResolved = resolved + 1
        setResolved(newResolved)

        const newInProgress = inProgress - 1
        setInProgress(newInProgress)

        const newTask = tasks.filter(task => task.id != reTask.id)
        setTasks(newTask)

        const newResolvedTask = [...resolvedTask,reTask]
        setResolvedTask(newResolvedTask)

        const newTicketData = ticketData.filter(ticketData => ticketData.id != reTask.id)
        setTicketData(newTicketData)
        toast("Task Complete ")        

    }
    // console.log(tasks)
    return (
        <div className=' grid md:grid-cols-5 lg:grid-cols-4 pb-8 gap-8 p-2'>
            <div className='order-2 md:order-1 col-span-1 md:col-span-3'>
                <h3 className='text-xl font-bold'>Customer Tickets</h3>
                <div className='py-4 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        ticketData.map((ticket) => <AllTicket handleTask={handleTask} ticket={ticket} tasks={tasks} key={ticket.id}></AllTicket>)
                    }
                </div>
            </div>
            <div className='order-1 md:order-2 md:col-span-2 lg:col-span-1'>
                <Status tasks={tasks} setTasks={setTasks} resolved={resolved} setResolved={setResolved}  inProgress={inProgress} setInProgress={setInProgress} resolvedTask={resolvedTask} handleResolvedTask={handleResolvedTask}></Status>
            </div>
        </div>
    );
};

export default TicketStatus;