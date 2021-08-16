import {createI18n} from 'vue-i18n';

const messages = {
    cn: {
        message: {
            hello: '你好，中国'
        }
    },
    en: {
        message: {
            hello: 'Hello World'
        }
    }
};

export default createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
});
