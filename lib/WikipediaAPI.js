const fetch = require("node-fetch");
module.exports = class WikipediaAPI{
    constructor(format){
        this.format = format;
        this.wikipediaAPIEndPoint = "https://en.wikipedia.org/w/api.php";
    }

    async setType(type){
        this.type = type;
    }

    async getByWord(word){
        let searchURL = this.wikipediaAPIEndPoint + "?action=opensearch&search=" + word + "&format=" + this.format;
        let result = await this.fetch(searchURL);
        return result;
    }

    async fetch(searchURL){
        const response = await fetch(searchURL);
        const json = await response.json();
        return json;
    }



}