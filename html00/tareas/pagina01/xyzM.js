import { loadXMLDoc } from './xml.js';
import { myFunction } from './mf.js';

document.getElementById("loadBtn").addEventListener("click", async () => {
    const cdData = loadXMLDoc();
    myFunction(cdData);
});