import React, { useState } from 'react';
import Task from './Task';
import Resolved from './Resolved';

const Status = ({tasks, resolvedTask, handleResolvedTask}) => {
    // console.log(tasks)
    
    return (
        <>
            <div>
                    <h3 className='text-xl font-bold pb-2 text-black'>Task Status</h3>
                    {
                        tasks.length > 0  ? tasks.map((task) => <Task task={task} key={task.id} handleResolvedTask={handleResolvedTask}></Task>)
                        : <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                    }
                    
                </div>
                <div className='py-8'>
                    <h3 className='text-xl font-bold pb-2 text-black'>Resolved Task</h3>
                    {
                        resolvedTask.length > 0 ? resolvedTask.map((resolved) => <Resolved key={resolved.id} resolved={resolved}></Resolved>)
                        : <p className='text-[#627382]'>No resolved tasks yet.</p>
                    }
                </div>
        </>
    );
};

export default Status;