import fsp from 'fs/promises';

// BEGIN
export const exchange = async(file1, file2) => {
    try {
        const cont1 = await fsp.readFile(file1, 'utf8');
        const cont2 = await fsp.readFile(file2, 'utf8');

        await fsp.writeFile(file1, cont2);
        await fsp.writeFile(file2, cont1);
    } catch (error) {
        console.error('Ошибка', error);
        throw error;
    }
}
// END