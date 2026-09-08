import { useLoaderData } from "react-router-dom";


const Applied = () => {
    const jobs =useLoaderData()
    return (
        <div>
            <h1>From applied</h1>
        </div>
    );
};

export default Applied;