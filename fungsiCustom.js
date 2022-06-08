// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  let hasilFinal = [];
  fs.readFile(file1, (err, data) => {
    if (err) {
      return fnCallback(err, null);
    } else {
      let hasilParse1 = JSON.parse(data);
      let hasilSplit1 = hasilParse1.message.split(" ");
      hasilFinal.push(hasilSplit1[1]);
    }
  });
  fs.readFile(file2, (err, data) => {
    if (err) {
      return fnCallback(err, null);
    } else {
      let hasilParse2 = JSON.parse(data);
      let hasilSplit2 = hasilParse2[0].message.split(" ");
      hasilFinal.push(hasilSplit2[1]);
    }
  });
  fs.readFile(file3, (err, data) => {
    if (err) {
      return fnCallback(err, null);
    } else {
      let hasilParse3 = JSON.parse(data);
      let hasilSplit3 = hasilParse3[0].data.message.split(" ");
      hasilFinal.push(hasilSplit3[1]);
    }
    fnCallback(null, hasilFinal);
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
