import React from 'react';

const Status = () => {
    return (
        <>
            <div>
                    <h3 className='text-xl font-bold pb-2'>Task Status</h3>
                    <p className='text-gray-600'>Select a ticket to add to Task Status</p>

                    <div className="w-full bg-base-100 my-4 rounded">
                        <div className="card-body">
                            <h2 className="card-title">Smalldf dffd f gdfgdgg dg Card</h2>
                            
                            <div className="">
                            <button className="btn bg-[#02A53B] w-full">Complete</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-base-100 my-4 rounded">
                        <div className="card-body">
                            <h2 className="card-title">Smalldf dffd f gdfgdgg dg Card</h2>
                            
                            <div className="">
                            <button className="btn bg-[#02A53B] w-full">Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-8'>
                    <h3 className='text-xl font-bold pb-2'>Resolved Task</h3>
                    <p className='text-gray-600'>No resolved tasks yet.</p>

                    <p className='bg-[#E0E7FF] p-4 my-4  w-full rounded'>Smalldf dffd f gdfgdgg d </p>
                </div>
        </>
    );
};

export default Status;