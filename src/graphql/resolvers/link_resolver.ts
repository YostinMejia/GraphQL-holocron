export const linkResolver = async (data: string[], callback: Function) => {
    return Promise.all(
        data.map((d) => callback(d)
    )
    )
}