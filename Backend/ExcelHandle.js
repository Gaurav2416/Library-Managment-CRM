// 'use strict';
// const excelToJson = require('convert-excel-to-json');
//  const filepath = "C:/Users/16824/OneDrive/Desktop/Project/DBS/Project2/Part3/Data/"
//  const filename = "MemberData.xlsx"
// const result = excelToJson({
//     sourceFile: filepath+filename 
// });
//  console.log(result);
// result will be an Object containing keys with the same name as the sheets found on the excel file. Each of the keys will have an array of objects where each of them represents a row of the container sheet. e.g. for a excel file that has two sheets ('sheet1', 'sheet2')
// {
//     sheet1: [{
//         A: 'data of cell A1',
//         B: 'data of cell B1',
//         C: 'data of cell C1'
//     }],
//     sheet2: [{
//         A: 'data of cell A1',
//         B: 'data of cell B1',
//         C: 'data of cell C1'
//     }]
// }

const ExcelJS = require('exceljs');
const workbook = new ExcelJS.Workbook();
const oracledb = require('oracledb')
const config = {
  user: 'c##scott',
  password: 'tiger',
  connectString: 'localhost:1521/orcl'
}

const filepath = "C:/Users/16824/OneDrive/Desktop/Project/DBS/Project2/Part3/Data/"
const filename = "BookIssued.xlsx"
async function read() {
    const read = await workbook.xlsx.readFile(filepath + filename);
    const worksheet = await workbook.getWorksheet()
    const rows = worksheet.getRows()
    let data = []
    for (var i = 2; i <= worksheet.actualRowCount; i++) {
            // worksheet.getRow(i).getCell(8).value = worksheet.getRow(i).getCell(8).value.text;
            data.push(worksheet.getRow(i).values);
    }
    for(var j=0; j<data.length;j++)
    {
   data[j].splice(0,1);
    }
    // console.log(data);
    let conn

// console.log(worksheet);
try {
  let sql = `Insert into BookIssued values (:1,:2,:3,:4,:5,:6,:7,:8,:9)`;
  conn = await oracledb.getConnection(config)
  // console.log('connection',data)
  result = conn.executeMany(sql, data);
 
} catch (err) {
  console.log('Ouch!', err)
}finally
{
if(conn)
{
    await conn.commit();
    await conn.close();
}
}
    // console.log(typeof (data));
    
    // console.log(typeof (worksheet))
    // console.log(read);
}
read()