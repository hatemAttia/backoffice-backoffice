export interface creatConference{
    conf_title: string,
    description:string,
    start_date:string,
    end_date:string,
    isActive:string,
}

export interface Conference{
    id: number,
    conf_title: string,
    description:string,
    start_date:string,
    end_date:string,
    isActive:boolean,
}

export interface User{
    id: number,
    name:string,
    email:string,
    role:string,
    country:string,
    phone_nber:string,
    password: string 
}