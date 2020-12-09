import { dom } from './dom';

const API_KEY= '12bc13a5cc15a08bf549fe4d82d0f372';
const extractedData = {};

const parseData = (data) => {
  if (data.cod === "404") {
    extractedData.ok = false;
    alert(data.message);
    extractedData.message = data.message;
    return;
  }
}