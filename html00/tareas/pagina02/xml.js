export async function loadXMLDoc() {
    try {
        const response = await fetch('cd_catalog.xml');
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "application/xml");
        return xmlDoc.getElementsByTagName("CD");
    } catch (error) {
        console.error("Error al cargar XML:", error);
    }
}