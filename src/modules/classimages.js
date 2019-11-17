import axios from 'axios'

export const images = {
    data() {
        return {
            list: [],
            obj: {
                id: 1,
                url: ''
            }
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=1')
            .then(res => {
                // eslint-disable-next-line no-console
                console.log(res.data)
                this.list = res.data
            })
    },
    methods: {
        addImage(){
            axios.post('https://jsonplaceholder.typicode.com/photos/', {
                id: Date.now(),
                url: this.obj.url
            })
                .then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res.data)
                    this.list.push(res.data)
                    this.obj.url = ''
                })
        },
        exclude(id){
            axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
                .then(res => {
                    // eslint-disable-next-line no-console
                    console.log(res.data)
                    this.list = this.list.filter(e => e.id !== id)
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        }
    }
};