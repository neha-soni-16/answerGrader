var ob = {}

const randomGen = () => {
    return (Math.floor(Math.random() * 5));
}

for(let i = 1; i < 13; i++)
{
    ob['Q' + i] = new Object();
    for(let j = 161; j < 188; j++)
    {
        ob['Q' + i]['P' + j] = randomGen() + 1
    }
}

const FileSystem = require("fs");
 FileSystem.writeFile('records.json', JSON.stringify(ob), (error) => {
    if (error) throw error;
  });