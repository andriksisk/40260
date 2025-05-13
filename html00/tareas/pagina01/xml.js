import { myFunction } from "./mf.js";

export function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("CD");
        myFunction(cd); // Llamamos a la función directamente
    };
    xhttp.open("GET", "cd_catalog.xml", true);
    xhttp.send();
}