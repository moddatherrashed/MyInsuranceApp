var api = {
    getCat(){
        var url = `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*`
        return fetch(url).then((res) => res.json());
    }
}
module.exports = api ;