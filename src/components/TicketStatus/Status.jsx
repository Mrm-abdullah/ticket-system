import React from 'react';
import Task from './Task';

const Status = ({tasks, resolved, setResolved}) => {
    // console.log(tasks)
    return (
        <>
            <div>
                    <h3 className='text-xl font-bold pb-2'>Task Status</h3>
                    {
                        tasks.length > 0  ? tasks.map((task) => <Task task={task} key={task.id}></Task>)
                        : <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                    }
                    
                </div>
                <div className='py-8'>
                    <h3 className='text-xl font-bold pb-2'>Resolved Task</h3>
                    <p className='text-[#627382]'>No resolved tasks yet.</p>

                    <p className='bg-[#E0E7FF] p-4 my-4  w-full rounded'>Smalldf dffd f gdfgdgg d </p>
                </div>
        </>
    );
};

export default Status;