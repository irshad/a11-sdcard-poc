const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 5555;
let sdCardContent;

let priorityList = [
    { priority: 1, type: "Internal", path: "/storage/emulated/0/reader-app-content", local: true },
    { priority: 2, type: "SDcard", path: "", local: true }
];

app.use(cors());
fs.readdir("storage", function (err, files) {
    if(files) {
      files.forEach(function (file) {
        if(fs.existsSync("/storage/"+file + "/reader-app-content")){
            sdCardContent = "/storage/" + file + "/reader-app-content"
            let index = priorityList.findIndex((ele)=> ele.type.toLowerCase() == "sdcard");
            priorityList[index].path = sdCardContent;
          }
      });
    }
});

app.use((req, res) => {
    res.write('Port listening!');
    res.end();
});

app.listen(port, () => {
    console.log(`Port listening at http://localhost:${port}`);
});