module.export = class WikipediaAPI{
    constructor(format){
        this.format = format;
        this.wikipediaAPIEndPoint = "https://en.wikipedia.org/w/api.php";
    }

    async setType(type){
        this.type = type;
    }

    async getByUserInput(input){
        let searchURL = this.wikipediaAPIEndPoint + "?action=opensearch&search=" + input + "&format=" + this.format;
        let result = this.fetch(searchURL);
    }

    async getRandom(){

    }

    async fetch(searchURL){
            let ret = [];
            fetch(searchURL).then((response) => {
                if (response.status !== 200){
                    ret.status = 400;
                    ret.msg = "Nothing has been found!";
                    return ret;
                }
                response.json().then((data) => {
                    ret.status = 200;
                    ret.data = data;
                    ret.msg = "OK";
                    return ret;
                })
            }). catch((error) => {
                console.error("Something went wrong: " + error);
                return false;
            })
    }



}