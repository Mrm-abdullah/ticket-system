import React from 'react';

const AllTicket = () => {
    return (
        <div className='py-4 grid grid-cols-2 gap-4'>
            <div className="card bg-base-100">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title justify-baseline text-lg"> Card Title</h2>
                        <div className="badge font-bold text-[#0B5E06] rounded-2xl bg-[#B9F8CF] px-2 py-4"><i class="fa-solid fa-circle text-[#02A53B]" ></i> Open
                        </div>
                    </div>
                    <p className='text-[#627382] py-1'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-between text-[#627382] items-center">
                        <div className="flex gap-2 items-center">
                            <p>#001</p>
                            <p className='text-[#F83044]'>HIGH PRIORITY</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Michael Brown</p>
                            <p><i class="fa-regular fa-calendar text-xl"></i> 1/17/2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title justify-baseline text-lg"> Card Title</h2>
                        <div className="badge font-bold text-[#9C7700] bg-[#F8F3B9] px-2 py-4"><i class="fa-solid fa-circle text-[#FEBB0C]" ></i> in -progress
                        </div>
                    </div>
                    <p className='text-[#627382] py-2'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-between text-[#627382] items-center">
                        <div className="flex gap-2 items-center">
                            <p>#001</p>
                            <p className='text-[#FEBB0C]'>HIGH PRIORITY</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Michael Brown</p>
                            <p><i class="fa-regular fa-calendar text-xl"></i> 1/17/2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title justify-baseline text-lg"> Card Title</h2>
                        <div className="badge bg-[#F8F3B9] text-[#9C7700] font-bold px-2 py-4"><i class="fa-solid fa-circle text-[#FEBB0C]" ></i> in -progress
                        </div>
                    </div>
                    <p className='text-[#627382] py-2'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div className="card-actions justify-between text-[#627382] items-center">
                        <div className="flex gap-2 items-center">
                            <p>#001</p>
                            <p className='text-[#02A53B]'>HIGH PRIORITY</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>Michael Brown</p>
                            <p><i class="fa-regular fa-calendar text-xl"></i> 1/17/2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTicket;