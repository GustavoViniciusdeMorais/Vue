import axios from 'axios'

export const comments = {
    data() {
        return {
            list: [],
            obj: {
                postId: Date.now(),
                id: Date.now(),
                name: '',
                email: '',
                body: ''
            }
        }
    },
    created() {
        axios.get('http://jsonplaceholder.typicode.com/comments?_limit=5')
            .then(res => {
                this.list = res.data
            })
    },
    methods: {
        deletePost(id){
            axios.delete(`http://jsonplaceholder.typicode.com/comments/${id}`)
                .then(res => {
                    this.list = this.list.filter(e => e.id !== id)
                    // eslint-disable-next-line no-console
                    console.log(res.data)
                })
                .catch(error => {
                    // eslint-disable-next-line no-console
                    console.log(error)
                })
        },
        addPost(){
          axios.post('http://jsonplaceholder.typicode.com/comments/',{
              postId: Date.now(),
              id: Date.now(),
              name: this.name,
              email: this.email,
              body: this.body
          })
              .then(res => {
                  this.list.push(res.data)
              })
        }
    }
};