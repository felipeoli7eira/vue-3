import http from '@/services/http.js'

async function attempt()
{
    try
    {
        const token = localStorage.hachi_integrations_auth_token

        const request = await http.get('/login')

        console.log(request)
    }
    catch (error)
    {
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

export { attempt, existsAuthToken, getToken }