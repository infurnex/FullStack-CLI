import fs from 'fs/promises';
export const reactHandle = async () => {
    try{
        await addComponts();
    }
    catch(e){
        throw e;
    }
}

const addComponts = async () => {
    const content = 
    `import { useState } from 'react'

    export default function Button() {
        const [count, setCount] = useState(0)
      return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
      )
    }`
    try{
        const path = "./src/components"
        await fs.mkdir(path)
        await fs.writeFile(path + "/Button.jsx", content);
    }
    catch(e){
        console.log(e);
        throw e;
    }
} 

const addPages = async () => {
    const content = `
    `
    try{
        const path = "./src/pages"
        await fs.mkdir(path)
        await fs.writeFile(path + "/HomePage.jsx", content);
    }
    catch(e){
        throw e;
    }
}