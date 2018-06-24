var api = {
    getTopCoins(){
        let uri = "https://api.coinmarketcap.com/v2/listings/"
        return fetch(url).then((res) => res.json());
    }
}

module.exports = api;