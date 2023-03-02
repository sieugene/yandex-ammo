import { createAmmoJson } from '../lib/create-ammo-json'
import { AmmoJSON } from 'types'

export const generateExampleAmmo = () => {
    const rawAmmo: AmmoJSON = {
        name: 'example',
        host: 'i-dev.api.qq.com',
        data: [
            {
                method: 'POST',
                path: '/ecommerce/goods/eshop/catalog',
                tag: 'qqq',
                body: { filters: {}, size: 24, page: 1 },
                headers: {
                    Authorization:
                        'Bearer 8f81c7fe-f5a1-4322-80fa-b54a6553bba9',
                },
            },
            {
                method: 'GET',
                path: '/catalog/zhenshchinam/zhenskaya-obuv/?opt=all',
                body: null,
            },
        ],
    }
    createAmmoJson(rawAmmo)
}
