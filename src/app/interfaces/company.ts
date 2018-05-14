import { Project } from './project';

export class Company {
    name: string;
    position: string;
    workTime: string;
    projects: Project[] = [];

    constructor() {}
}