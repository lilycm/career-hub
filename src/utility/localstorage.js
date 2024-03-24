const getStoredJobApplication = () => {
    const storeJobApplication = localStorage.getItem('job Applications');
    if (storeJobApplication) {
        return JSON.parse(storeJobApplication);
    }
    else{
        return [];
    }
}



const saveJobApplication = id => {
    const storeJobApplications = getStoredJobApplication();
    const exits = storeJobApplications.find(jodId => jodId === id);
    if(!exits){
        storeJobApplications.push(id);
        localStorage.getItem('job Applications', JSON.stringify(storeJobApplications));
    }
}
export {getStoredJobApplication, saveJobApplication }