export default {
    namespaced: true,

    state:     {
        counter: 0
    },

    actions:   {
        actionIncrement(context, payload)
        {
            // ... backend request or other action
            context.commit('mutationIncrement', payload)
        }
    },

    mutations: {
        mutationIncrement(state, payload)
        {
            state.counter += payload
        }
    },

    getters:   {
        getterIncrement(state)
        {
            return state.counter
        }
    },
}