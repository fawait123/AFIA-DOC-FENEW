import axios from 'axios'
import { notification } from 'antd'

const handleNotification = (type, title, text) => {
    notification[type]({
        message: title,
        description: text,
        zIndex: 99999999999,
        placement: 'topRight',
    })
}

const httpRequest = axios.create({
    baseURL: 'https://api.blokbengkel.com/',
})

httpRequest.interceptors.request.use(function (config) {
    config.headers.Authorization =
        'Bearer ' + window.localStorage.getItem('token')

    return config
})

httpRequest.interceptors.response.use(
    function (response) {
        return response
    },
    (error) => {
        if (error?.response?.data?.message) {
            handleNotification('error', 'Error', error?.response?.data?.message)
        }
        if (error?.response?.status == 401) {
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('user')
            window.location.href = '/'
        }
        return Promise.reject(error)
    }
)

export default httpRequest
