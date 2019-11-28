import axios from 'axios'

export const comments = {
    data() {
        return {
            list: [],
            displayForm: '',
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
        axios.get('http://jsonplaceholder.typicode.com/comments?_limit=1')
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
        addPost(event){
          axios.post('http://jsonplaceholder.typicode.com/comments/',{
              postId: Date.now(),
              id: Date.now(),
              name: event.name,
              email: event.email,
              body: event.body
          })
              .then(res => {
                  // eslint-disable-next-line no-console
                  console.log(res.data)
                  this.list.push(res.data)
              })
            this.displayForm = ''
        }
    }
};