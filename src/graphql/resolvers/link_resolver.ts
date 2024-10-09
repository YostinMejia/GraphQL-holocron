export const linkResolver = async (data: string[], callback: Function) => {
    return Promise.all(
        data.map(async (d) => {
            return await callback(d);
        })
    )
}