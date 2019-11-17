import axios from 'axios'

export const mixinPhotos = {
    data() {
        return {
            photos: []
        }
    },
    created() {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
            .then(res => this.photos = res.data)
    }
};