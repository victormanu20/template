import axios from "axios";
const baseURL = "https://crmred.co/"  

export const axiosIns = axios.create({baseURL});
// export const hostname = window.location.hostname.replace('www.','').split('.')[0];
export const hostname = 'emporio-bienes-y-capitales-sas';