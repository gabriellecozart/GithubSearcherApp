import { Repository } from "../models/repository.interface";
import { USER_LIST } from "./user.mocks";

const repositoryList: Repository[] = [
    {
        name: 'Camera',
        description: 'latida',
        owner: USER_LIST[0]
    },
    {
        name: 'Battery',
        description: 'thats batty',
        owner: USER_LIST[0]
    },
    {
        name: 'Geolocation',
        description: 'yehhh',
        owner: USER_LIST[1]
    },
    {
        name: 'File Browser',
        description: 'not as cool',
        owner: USER_LIST[1]
    }
];

export const REPOSITORY_LIST = repositoryList;