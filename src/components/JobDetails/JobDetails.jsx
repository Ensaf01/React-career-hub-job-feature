import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData() // get full array
    const { id } = useParams() //just get id string '1'/ '2' / '3' etc
    //  console.log("array id",id)
    //  console.log("array jobs ",jobs)

    const idint = parseInt(id)
    const job = jobs.find(job => job.id === idint)
    console.log(job)

    const handleApplyJob =()=>{
        toast("good jfdgjd")
        saveJobApplication(idint)
    }
    return (
        <div className="mb-5 mt-5">
            <h1 className="text-4xl text-center font-bold">Job Details</h1>

            {/* main div */}

            <div className="grid grid-cols-4 gap-3 ">
                {/* 4 vag and 3 vag give 1st div and 1 vag give 2nd div */}

                {/* 1st div */}

                <div className="grid md:col-span-3 gap-5 p-4 ">
                    <p><span className="text-xl font-semibold">job_description </span>:{job.job_description}</p>

                    <p><span className="text-xl font-semibold">job_responsibility :</span>{job.job_responsibility}</p>

                    <p><span className="text-xl font-semibold">educational_requirements :</span> <br />{job.educational_requirements}</p>

                    <p><span className="text-xl font-semibold">Experiences:</span> <br />{job.experiences}</p>

                </div>

                {/* 2nd div */}

                <div >
                    <div className=" p-5 bg-purple-100 rounded-lg">
                        <h2 className="text-center font-bold">Job Details</h2>
                        <hr />
                        <div className="mt-3">
                            <img src="" alt="" />
                            <p><span className="font-semibold">Salary :</span>{job.salary}</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p><span className="font-semibold">Job Title :</span>{job.job_title}</p>
                        </div>

                        <h2 className="text-center font-bold mt-5 mb-2">Contact Information</h2>
                        <hr />
                        <div className="mt-5">
                            <div>
                                <img src="" alt="" />
                                <p><span className="font-semibold">Phone : </span>{job.contact_information.phone}</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p><span className="font-semibold">Email : </span>{job.contact_information.email}</p>
                            </div>
                            <div>
                                <img src="" alt="" />
                                <p><span className="font-semibold">Address : </span>{job.contact_information.address}</p>
                            </div>

                        </div>
                    </div>
                    <div className=" ">
                        <button  onClick={handleApplyJob} className="mt-5 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-lg">Apply</button>
                    </div>

                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;