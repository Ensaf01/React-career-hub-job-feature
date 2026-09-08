import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import loc from '../../assets/icons/Location.png'
import sala from '../../assets/icons/money.png'
import { getStoreJobId } from "../../Utility/LocalStorage"
const Applied = () => {
    const [appliedAllJobs, setAppliedAllJobs] = useState([]);
    const jobs = useLoaderData(); // all data load from json file 

    useEffect(() => {

        const storeJobIds = getStoreJobId(); // fetch all application id  
        if (jobs.length > 0) {
            // const jobsApplied =jobs.filter(job => storeJobIds.includes(job.id));

            // jobs er modhe filter korteche je store id ta ache kina include

            const jobsApplied = [];

            for (const id of storeJobIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);

                }

            }
            // console.log(jobs,storeJobIds,jobsApplied)
            setAppliedAllJobs(jobsApplied);
        }

    }, [])
    

    return (
        <div className="border p-3">

            {
                appliedAllJobs.map((jobx, ind) =>
                    <span key={ind}>
                        <div className="grid grid-cols-4 text-start items-center gap-5 rounded-md border-2 p-3 mb-3">
                            <div className="bg-slate-400 col-span-1 p-5 w-max rounded-lg mb-2">
                                <img className="w-20 h-30 " src={jobx.logo} alt="" />
                            </div>
                            <div className=" col-span-2 grid gap-3 ">
                                <p className="text-xl font-semibold">{jobx.job_title}</p>
                                <p className="text-xl">{jobx.company_name}</p>
                                <div className="">
                                    <button className="border-2 border-blue-800 mr-3 p-1 rounded-xl text-blue-500">{jobx.remote_or_onsite}</button>
                                    <button className="border-2 border-blue-800 mr-3 p-1 rounded-xl text-blue-500">{jobx.job_type}</button>
                                </div>
                                <div className=' grid gap-2'>
                                    <div className='flex'>
                                        <img src={loc} alt="" /> <p>{jobx.location}</p>
                                    </div>
                                    <div className='flex'>
                                        <img src={sala} alt="" />
                                        <p>{jobx.salary}</p>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="col-span-1">
                                <Link to={`/job/${jobx.id}`}>
                                    <button
                                        className='bg-indigo-500 opacity-75 p-2 rounded-xl mt-5 text-white font-semibold'>View Details</button>
                                </Link>
                                

                            </div>

                         
                        </div>



                    </span>)
            }
        </div>
    );
};

export default Applied;