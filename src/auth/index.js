import store from '../store'
import createAuth0Client from '@auth0/auth0-spa-js'

let auth0Client
let token
let userInfo

const getAuthClient = async () => {

    if (store.getters['main/authClient']) {
        return store.getters['main/authClient']
    }
    return await createAuth0Client({
        domain: import.meta.env.VITE_AUTH0_CONFIG_DOMAIN,
        client_id: import.meta.env.VITE_AUTH0_CONFIG_CLIENTID,
        redirect_uri: import.meta.env.VITE_DOMAINURL_REDIRECT,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        onRedirectCallback: (appState) => {
            router.push('http://localhost:3000/');
          },
    })
}

export const refresher = async () => {
    store.dispatch('main/setAuthLoadingStatus', true)
    auth0Client = await getAuthClient()

    if (await auth0Client.isAuthenticated()) {
        console.log('the user is authenitcated')
        store.dispatch('main/setAuthLoadingStatus', true)
        store.dispatch('main/setAuthClient', auth0Client)
        const userData = await auth0Client.getUser()
        store.dispatch('main/setUser', userData)
        store.dispatch(
            'main/setUserAuthenticated',
            await auth0Client.isAuthenticated()
        )
        store.dispatch('main/setAuthLoadingStatus', false)
    }
//     console.log(await auth0Client.isAuthenticated(), ' this is auth0 client')
    // console.log(await auth0Client.getTokenSilently(), 'this is auth0Client')
    // console.log(await auth0Client.getUser(), 'this is auth0Client User')
    // console.log(await auth0Client.isAuthenticated(), 'this is auth0Client User')

    // console.log(store.getters['main/authClient'])

    // console.log(localStorage.getItem('access_token'))
}

export const signIn = async () => {
    store.dispatch('main/setAuthLoadingStatus', true)
    auth0Client = await getAuthClient()
    store.dispatch('main/setAuthClient', auth0Client)
    try {
        await auth0Client.loginWithPopup({})   // => works perfectly returns user data and access token from auth 0

        // await auth0Client.loginWithRedirect({
        //     appState: {
        //         redirect_uri: 'http://localhost:3000/', // ========> expected to return user data and access token then redirect to specified uri but instead 
        //     },                                          //           returns user as undefined and something called "browser-tabs-lock-key-auth0.lock.getTokenSilently"
        // })

        

        const userData = await auth0Client.getUser()
        localStorage.setItem('user', JSON.stringify(userData))
        token = await auth0Client.getTokenSilently()
        localStorage.setItem('token', token)
        store.dispatch('main/setUser', userData)
        store.dispatch(
            'main/setUserAuthenticated',
            await auth0Client.isAuthenticated()
            )
            store.dispatch('main/setAuthLoadingStatus', false)
        userInfo = await auth0Client.getUser()
        console.log(userInfo.sub)
    } catch (e) {
        console.error(e)
    }
}

export const signOut = async () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    return auth0Client.logout()
}

export const authGuard = async function (to, from, next) {
    store.dispatch('main/setAuthLoadingStatus', true)

    auth0Client = await getAuthClient()
    store.dispatch('main/setAuthClient', auth0Client)

    if (await auth0Client.isAuthenticated()) {
        console.log('User is authenticated')
        const userData = await auth0Client.getUser()
        store.dispatch('main/setUser', userData)
        store.dispatch('main/setAuthLoadingStatus', false)
        store.dispatch('main/setUserAuthenticated', true)
        console.log('user authenitcated')
        return { go: next(), vld: true }
    } else {
        console.log('User not authenticated >> redirect to login')
        store.dispatch('main/setUser', null)
        store.dispatch('main/setAuthLoadingStatus', false)
        store.dispatch('main/setUserAuthenticated', false)
        console.log('user unAuthenticated')
        return { go: signIn(), vld: false }
    }
}
// ======================= APOLLO without authentication ===============

// import {
//     ApolloClient,
//     InMemoryCache,
//     createHttpLink,
//     split,
// } from '@apollo/client/core'
// import { createApolloProvider } from '@vue/apollo-option'
// import { setContext } from '@apollo/client/link/context'
// import { WebSocketLink } from '@apollo/client/link/ws'
// import { getMainDefinition } from '@apollo/client/utilities'

// const cache = new InMemoryCache()

// const apolloClient = new ApolloClient({
//     cache,
//     uri: 'http://localhost:8080/v1/graphql',
// })

// export const apolloclient = apolloClient

// export const apolloProvider = createApolloProvider({
//     defaultClient: apolloClient,
// })

//   ===================== APOLLO ==============================
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    split,
} from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'

let apolloClient

if (store.getters['main/isLoading'] === false) {
    const getHeaders = async () => {
        auth0Client = await getAuthClient()
        const headers = {}
        // const isauth = await auth0Client.isAuthenticated();
        if (await auth0Client.isAuthenticated()) {
            // const token = await auth0Client.getTokenSilently()
            if (localStorage.token) {
                headers.Authorization = `Bearer ${localStorage.token}`
            }
            return headers
        } else {
            return {}
        }
    }

    const httpLink = createHttpLink({
        uri: 'http://localhost:8080/v1/graphql',
    })

    const wsLink = new WebSocketLink({
        uri: `ws://localhost:8080/v1/graphql`,
        options: {
            reconnect: true,
            // timeout: 30000,
            lazy: true,
            connectionParams: async () => {
                // console.log(await getHeaders())
                auth0Client = await getAuthClient()
                if (await auth0Client.isAuthenticated()) {
                    return {
                        headers: await getHeaders(),
                    }
                } else {
                    return {}
                }
            },
        },
    })

    const authLink = setContext(async () => {
        auth0Client = await getAuthClient()
        if (await auth0Client.isAuthenticated()) {
            // const token = await auth0Client.getTokenSilently()
            return {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            }
        } else {
            return {}
        }
    })

    const link = split(
        ({ query }) => {
            const definition = getMainDefinition(query)
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            )
        },
        wsLink,
        authLink.concat(httpLink)
    )

    const cache = new InMemoryCache()
    apolloClient = new ApolloClient({
        cache,
        link,
    })
}

export const apolloclient = apolloClient

export const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
    refresh: refresher(),
    // signout: signOut()
})
