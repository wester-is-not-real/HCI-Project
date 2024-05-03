/** @type {import('./$types').PageLoad} */
export function load({ cookies}) {
    return {
        platform: cookies.get("platform")
    }
}