import { loadXMLDoc } from './xml.js';
import { myFunction} from './mf.js';

document.getElementById("loadBtn").addEventListener("click", async () => {
    try {
        const cds = await loadXMLDoc();
        myFunction(cds);
    } catch (error) {
        console.error("Error al ejecutar la función:", error);
    }
});