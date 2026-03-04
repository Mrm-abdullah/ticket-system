
const AllTicket = ({ticket, handleTask}) => {
    // console.log(ticket)
    return (
        <>
            <div onClick={() => handleTask(ticket)}  className="card bg-base-100">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <h2 className="card-title justify-baseline text-lg"> {ticket.title} </h2>
                        <div className="badge font-bold text-[#0B5E06] rounded-2xl bg-[#B9F8CF] px-2 py-4"><i className="fa-solid fa-circle text-[#02A53B]" ></i> Open
                        </div>
                    </div>
                    <p className='text-[#627382] py-1'>{ticket.description}</p>
                    <div className="card-actions justify-between text-[#627382] items-center">
                        <div className="flex gap-2 items-center">
                            <p> #{ticket.id} </p>
                            <p className={ ticket.priority === 'HIGH' ?  'text-[#F83044]' : ticket.priority === 'LOW' ? 'text-[#02A53B]':'text-[#FEBB0C]'}>{ticket.priority} PRIORITY</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p>{ticket.customer}</p>
                            <p><i className="fa-regular fa-calendar text-xl"></i> {ticket.createdAt}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
        //     <div className="card bg-base-100 shadow-sm">
        //         <div className="card-body">
        //             <div className='flex justify-between'>
        //                 <h2 className="card-title justify-baseline text-lg"> Card Title</h2>
        //                 <div className="badge font-bold text-[#9C7700] bg-[#F8F3B9] px-2 py-4"><i className="fa-solid fa-circle text-[#FEBB0C]" ></i> in -progress
        //                 </div>
        //             </div>
        //             <p className='text-[#627382] py-2'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        //             <div className="card-actions justify-between text-[#627382] items-center">
        //                 <div className="flex gap-2 items-center">
        //                     <p>#001</p>
        //                     <p className='text-[#FEBB0C]'>HIGH PRIORITY</p>
        //                 </div>
        //                 <div className="flex gap-2 items-center">
        //                     <p>Michael Brown</p>
        //                     <p><i className="fa-regular fa-calendar text-xl"></i> 1/17/2024</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     
    );
};

export default AllTicket;