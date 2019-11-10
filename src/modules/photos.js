import axios from 'axios'

export async function getImages () {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3', )
    // let list = response.data.map(x => x.url)
    // // eslint-disable-next-line no-console
    // console.log('list: ',list)
    // return list
    var strr = [];
    await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=3', )
        .then(res => { strr.push(res.data) })
    return strr;
}
