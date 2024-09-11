import instance from './index'

export default {
    RegisterApi(data){
        return instance({
            url: '/auth/register',
            method: 'post',
            data: data,
            requestBase: '/api',
        })
    },
}