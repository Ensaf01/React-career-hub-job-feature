const getStoreJobId = ()=>{
   const storeJobApplicationId= localStorage.getItem('job_id');
   if(storeJobApplicationId){
    return JSON.parse(storeJobApplicationId);
   }
   else{
    return [];
   }
}

const saveJobApplication =(id)=>{
    const jobApplicationId=getStoreJobId();
    const exists=jobApplicationId.find (jobId =>jobId ===id )
    if(!exists){
        jobApplicationId.push(id);
        localStorage.setItem('job_id',JSON.stringify(jobApplicationId)) //job_id is key and json is value 
        
    }
}

export {saveJobApplication,getStoreJobId}