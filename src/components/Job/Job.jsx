import loc from '../../assets/icons/Location.png'
import sala from '../../assets/icons/money.png'
const Job = ({ job }) => {
    const { logo, job_title, company_name, location, job_type, remote_or_onsite, salary } = job;
    return (
        <div className="m-2 p-5 border-2 rounded-xl ">
            <img className="w-30 h-20" src={logo} alt="" />
            <p>{job_title}</p>
            <p>{company_name}</p>
            <div className="mt-5">
                <button className="border-2 border-blue-800 mr-3 p-1 rounded-xl text-blue-500">{remote_or_onsite}</button>
                <button className="border-2 border-blue-800 mr-3 p-1 rounded-xl text-blue-500">{job_type}</button>
            </div>
            <div className='grid grid-cols-2 mt-5'>
                <div className='flex'>
                    <img src={loc} alt="" /> <p>{location}</p>
                </div>
                <div className='flex'>
                    <img src={sala} alt="" />
                    <p>{salary}</p>
                </div>
            </div>
            <button className='bg-indigo-500 opacity-75 p-2 rounded-xl mt-5 text-white font-semibold'>View Details</button>



        </div>
    );
};

export default Job;