import fsp from 'fs/promises';

// BEGIN
export async function getTypes(pathes) {
    const promis = pathes.map(async (path) => {
        try {
            const stats = await fsp.stat(path);
            return stats.isDirectory() ? 'directory' : 'file';
        } catch (error) {
            return null;
        }
    });

    return Promise.all(promis);
}
// END