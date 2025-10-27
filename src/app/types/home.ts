export interface Buttons{
    title: string;
    url?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => void;
}
export interface Work_Experience{
    Link:string;
    Image:string;
    Title:string;
    Description:string;
}
export interface Projects extends Work_Experience{
    Sup_title:string,
    reverse?:boolean;
}
