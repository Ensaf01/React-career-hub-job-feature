
const Job = ({job}) => {
    const {logo}=job;
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Job;