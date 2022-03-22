import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-93bf4-default-rtdb.firebaseio.com/'
})