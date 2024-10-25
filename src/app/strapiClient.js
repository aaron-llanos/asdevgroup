import Strapi from 'strapi-sdk-js';
import { API_URL } from './config';

const strapi = new Strapi('https://srv602691.hstgr.cloud');
const apiToken = '6f28ccc811024d7f572522827b5d8b3cdbd488b9f307848749e922b2454ba986156558a24387c0b0b4b87fdeee1052dd16c8220795a5ad4ab157be991691df9757400e2223a13f081d785e34f4e4e6db58eb69f8f077f885a93f1bd0d9c797c0fec9ad3eb9e300403220e19d940f21b70090283e5069219c8261296be56c4de5'; 
//const apiToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
strapi.setToken(apiToken);

export default strapi;
