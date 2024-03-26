export default {
    namespaced: true,
    state: {
      step: null,
      authStatus: true, // авторизация
      headerStatus: false, // хедер
      color: {
        catalog: '#621216',
        catalogColor: '#FFD9D9',
        history: '#621216',
        historyColor: '#FFD9D9',
        profile: '#621216',
        profileColor: '#FFD9D9'
      },
      conteiner: {
        conteinerCatalog: null
      },
      userId: null
    },
    actions: {
        setStep: ({ commit }, payload) => commit('SET_STEP', payload),
        setAuthStatus: ({ commit }, payload) => commit('SET_AUTH_STATUS', payload),
        setHeaderStatus: ({ commit }, payload) => commit('SET_HEADER_STATUS', payload),
        setCatalog: ({ commit }, payload) => commit('SET_CATALOG', payload),
        setHistory: ({ commit }, payload) => commit('SET_HISTORY', payload),
        setProfile: ({ commit }, payload) => commit('SET_PROFILE', payload),
        setCatalogColor: ({ commit }, payload) => commit('SET_CATALOG_COLOR', payload),
        setHistoryColor: ({ commit }, payload) => commit('SET_HISTORY_COLOR', payload),
        setProfileColor: ({ commit }, payload) => commit('SET_PROFILE_COLOR', payload),
        setConteinerCatalog: ({ commit }, payload) => commit('SET_CONTEINER_CATALOG', payload),
        setUserId: ({ commit }, payload) => commit('SET_USER_ID', payload)
    },
    mutations: {
        SET_STEP: (state, payload) => { state.step = payload.data },
        SET_AUTH_STATUS: (state, payload) => { state.authStatus = payload.data },
        SET_HEADER_STATUS: (state, payload) => { state.headerStatus = payload.data },
        SET_CATALOG: (state, payload) => { state.color.catalog = payload.data },
        SET_HISTORY: (state, payload) => { state.color.history = payload.data },
        SET_PROFILE: (state, payload) => { state.color.profile = payload.data },
        SET_CATALOG_COLOR: (state, payload) => { state.color.catalogColor = payload.data },
        SET_HISTORY_COLOR: (state, payload) => { state.color.historyColor = payload.data },
        SET_PROFILE_COLOR: (state, payload) => { state.color.profileColor = payload.data },
        SET_CONTEINER_CATALOG: (state, payload) => { state.conteiner.conteinerCatalog = payload.data },
        SET_USER_ID: (state, payload) => { state.userId = payload.data }
    },
    getters: {
        getStep: state => state.step,
        getAuthStatus: state => state.authStatus,
        getHeader: state => state.headerStatus,
        getCatalog: state => state.color.catalog,
        getHistory: state => state.color.history,
        getProfile: state => state.color.profile,
        getCatalogColor: state => state.color.catalogColor,
        getHistoryColor: state => state.color.historyColor,
        getProfileColor: state => state.color.profileColor,
        getConteinerCatalog: state => state.conteiner.conteinerCatalog,
        getUserId: state => state.userId
    }
}