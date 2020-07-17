import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://react-login-submission.firebaseio.com/'
})

export default instance;