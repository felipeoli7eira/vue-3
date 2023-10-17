import http from '@/services/http.js'

async function attempt(email, password)
{
    try
    {
        const request = await http.post('/login', {
            email,
            password
        })

        return request
    }
    catch (error)
    {
        if (error?.response?.data) {
            return error.response.data
        }

        return false
    }
}

async function checkAuth()
{
    try
    {
        if (!existsAuthToken()) {
            return false
        }

        const token = getToken()
        console.log(token)

        // const request = await http.get('/login')

        return true
    }
    catch (error)
    {
        console.warn('checkAuth: '.concat(error))
        return false
    }
}

/**
 * Metodo responsavel por verificar se o token existe no localStorage (Nao verifica a validade dele)
 * @return {boolean}
*/
function existsAuthToken()
{
    return localStorage.hachi_integrations_auth_token !== undefined
}

/**
 * Retorna o token salvo no local storage
 * @return {string} O token salvo no localStorage
*/
function getToken()
{
    return localStorage.hachi_integrations_auth_token
}

function setToken(token)
{
    localStorage.hachi_integrations_auth_token = token
}

function logOut()
{
    console.log('logOut')
}

export { attempt, existsAuthToken, getToken, checkAuth, logOut, setToken }