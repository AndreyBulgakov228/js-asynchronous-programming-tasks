import fsp from 'fs/promises';

// BEGIN
export const reverse = async (filePath) => {
        const data = await fs.readFile(filePath, 'utf-8');
        const reversedLines = data.split('\n').reverse();
        const reversedData = reversedLines.join('\n');
        await fs.writeFile(filePath, reversedData);
};
// END