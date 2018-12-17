const fetch = require("node-fetch");

/**
 * A CLASS to handle WikipediaAPI REST calls. 
 * By Krzysztof Buczynski
 */
module.exports = class WikipediaAPI {
    /**
     * Constructor of a CLASS, SET return format and END Point URL.
     * @param {STRING} format 
     */
    constructor(format) {
        this.format = format;
        this.wikipediaAPIEndPoint = "https://en.wikipedia.org/w/api.php";
    }

    /**
     * Overwrite function which SET a return format of a API call.
     * @param {STRING} type 
     */
    async setType(type) {
        this.type = type;
    }

    /**
     * Function to query API for given word. It runs a "opensearch" command in WikipediaAPI. 
     * @param {STRING} word 
     */
    async getByWord(word) {
        let searchURL = this.wikipediaAPIEndPoint + "?action=opensearch&search=" + word + "&format=" + this.format;
        let result = await this.fetch(searchURL);
        return result;
    }

    /**
     * A function which runs a FETCH command to query the API for data based on GET REQUEST
     * @param {STRING} searchURL 
     */
    async fetch(searchURL) {
        const response = await fetch(searchURL);
        const json = await response.json();
        return json;
    }



}