import { createStore } from 'vuex';

import counter from '@/store/counter';

const store = createStore({
    modules:   {
        counter
    },
})

export default store;