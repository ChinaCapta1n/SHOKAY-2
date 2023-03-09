import { instance } from './index.js';

console.log(instance)

const getNavigationData = (url) => {
    instance.get(url);
}

console.log(getNavigationData({ url: '@/mock/navigation.json' }))