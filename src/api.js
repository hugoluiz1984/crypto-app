let BASE = 'https://api.coingecko.com/api/v3/coins'

export default {
    getAllCoins: async () => {
        const res = await fetch(BASE + '/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
        const json = await res.json();

        return json
    },
    getCoins: async (category, page, search) => {
        let fields = {};
        if(category!==0){
            fields.category = category;
        }
        if(page>0){
            fields.page = page;
        }
        if(search!==''){
            fields.search = search;
        }

        const res = await fetch(BASE + `/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`);
        const json = await res.json();

        return json
    },

}