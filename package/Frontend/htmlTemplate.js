import fs from "fs";

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpage</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <h1>
        Webpage Template
    </h1>
    <div>
        Counter - 
        <span id="counter">0</span>
    </div>
    <div>
        <button>click</button>
    </div>
    <script src="./script.js"></script>
  </body>
</html>
`;

const cssContent = `
body{
    background-color : blue
}
`
const jsContent = ``

export const htmlTemplate = async () => {
    try{
        fs.writeFile('index.html', htmlContent, (err) => {
            if (err) throw err;
        });
        fs.writeFile('style.css', cssContent, (err) => {
            if (err) throw err;
        });
        fs.writeFile('script.js', jsContent, (err) => {
            if (err) throw err;
        });
    }
    catch(e){
        console.log(e);
    }
}