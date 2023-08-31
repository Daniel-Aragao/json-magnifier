import path from "path";

import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default  [
    {
        entry: './processor.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            libraryTarget: 'var',
            library: 'magnifier'
        },
    },
    {
        entry: 'xlsx',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'xlsx.bundle.js',
            libraryTarget: 'var',
            library: 'xlsx'
        },
    }
]