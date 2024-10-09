export const linkResolver = async (data: string[], callback: Function) => {
    
    return {
        count: data.length,
        results: await Promise.all(
            data.map(async (d) => {
                return await callback(d);
            })
        )
    }
}