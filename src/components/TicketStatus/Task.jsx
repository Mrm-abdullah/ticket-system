import React from 'react';

const Task = ({task}) => {
    console.log(task)
    return (
        <>
            <div className="w-full bg-base-100 my-4 rounded">
                <div className="card-body">
                    <h2 className="card-title">{task.title}</h2>
                    
                    <div className="">
                        <button className="btn bg-[#02A53B] w-full">Complete</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Task;