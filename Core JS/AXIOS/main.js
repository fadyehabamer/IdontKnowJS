const axios = require('axios')

// Get the data from the API
axios({
    url: '/todos',
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'get',
    headers: {},
    params: {
        id: 1,

    },
    data: {},
    timeout: 0,
}).then(response => {
    // if success
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
}).catch(error => {
    // if error
    console.log(error)
}).then(() => {
    // always run after the request
    console.log('*******Finished*******')
})

console.log('=========================================================')

// Post the data to the API
axios({
    url: '/posts',
    baseURL: 'https://jsonplaceholder.typicode.com',
    method: 'post',
    headers: {},
    data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
    },
    timeout: 0,
}).then(response => {
    // if success
    console.log(response.data)
    console.log(response.status)
    console.log(response.statusText)
}).catch(error => {
    // if error
    console.log(error)
}).then(() => {
    // always run after the request
    console.log('*******Finished*******')
})

console.log('=========================================================')

// Get the data from the API asynchronously

const getTodos = async () => {
    const response = await axios({
        url: '/todos',
        baseURL: 'https://jsonplaceholder.typicode.com',
        method: 'get',
        headers: {},
        params: {
            id: 1,

        },
        data: {},
        timeout: 0,
    })
    console.log(response.data)

}
getTodos()

console.log('=========================================================')
