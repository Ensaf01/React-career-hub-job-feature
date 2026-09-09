import userImage from '../../assets/images/user1.jpg'
const Banner = () => {
    return (
        <div className='grid grid-cols-2 items-center bg-purple-100 rounded-lg p-3'>
            <div className='flex flex-col gap-3 '>
                <h1 className="text-4xl font-bold">One Step Closer To Your Dream Job</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn w-max bg-purple-500 text-white">Get Started</button>

            </div>
            <div>
                <img className='rounded-lg' src={userImage} alt="" />
            </div>

        </div>
    );
};

export default Banner;