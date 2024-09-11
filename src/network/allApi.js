import instance from './index'

export default {
    GetCaptcha(data){
        return instance({
            url: '/auth/captcha',
            method: 'post',
            data: data,
            requestBase: '/api',
        })
    },
}