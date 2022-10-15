export const getGifs = async (name) => {
    const res = await fetch(`${import.meta.env.VITE_API_AURL_TEST}&q=${name}`)
    return await res.json()
}