const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job Applications');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exits = storedJobApplications.find(jobId => jobId === id);
    if(!exits){
        storedJobApplications.push(id);
        localStorage.setItem('job Applications', JSON.stringify(storedJobApplications));
    }
}
export {getStoredJobApplication, saveJobApplication }