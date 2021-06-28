export enum Rover {
    Opportunity = 'Opportunity',
    Curiosity = 'Curiosity',
    Spirit = 'Spirit',
    Perseverance = 'Perseverance',
}

export type Routes = 'gallery' | 'favorite';
export type AnyRover = keyof typeof Rover;

export interface Photo {
    id: number;
    sol: number;
    camera: Camera;
    img_src: string;
    earth_date: Date;
    rover: RoverData;
}

interface Camera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

interface RoverData {
    id: number;
    name: string;
    landing_date: Date;
    launch_date: Date;
    status: string;
}