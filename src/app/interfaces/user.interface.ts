export interface UserI {
    email: string;
    password: string;
}
export interface MailToFrom {
    mailFrom: string;
    mailTo: string;
    subjet: string;
    Name?: string;
    jwt: any;
}