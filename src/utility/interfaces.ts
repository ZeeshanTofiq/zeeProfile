export interface contactInfoState {
    data: {
        generalInfo: generalInfo;
        contact: contact;
        buildConnect: buildConnect[];
    } | null;
    showSpinner: Boolean;
}

export interface generalInfo {
    name: string;
    gender: string;
    dob: string;
    country: string;
    aboutMe: string;
}
export interface contact {
    address: string;
    phone: string;
    email: string;
}
export interface buildConnect {
    name: string;
    profileLink: string;
    logo?: string;
}
export interface profile {
    img: string;
    coverImg: string;
    name: string;
}
export interface headerState {
    data: profile | null;
    showSidebar:Boolean;
}
export interface skills {
    name: string;
    exp: string;
}
export interface SkillsState {
    data:skills[] |null;
}
export interface education{
    name:string;
    InstituteName:string;
    passYear:string;
    about?:string;
}
export interface educationState{
    data:education[]|null;
}

export interface work{
    companyName:string;
    passYear:string;
    type:string;
}
export interface workState{
    data:work[]|null;
}