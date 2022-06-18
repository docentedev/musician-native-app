const apis = {
    auth: 'https://musician-api-auth-production.up.railway.app/api/v1',
    musician: 'https://musician-api-production.up.railway.app/api/v1',
}

export const musicianApiPrefix = (url: string): string => {
    return apis.musician + url
}

export default apis