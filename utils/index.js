import { PROJECT_LIST_API } from '../config';

export const fetchProjects = async () => {
    let projectListRes = await fetch(PROJECT_LIST_API, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });
    projectListRes = await projectListRes.json();
    return projectListRes;
} 