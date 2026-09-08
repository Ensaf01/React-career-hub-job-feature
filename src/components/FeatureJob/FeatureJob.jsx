import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeatureJob = () => {
    const [jobs, setJob] = useState([])
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-bold">Featured Jobs:{jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2  items-start">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default FeatureJob;