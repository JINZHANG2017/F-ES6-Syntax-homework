// function parseData(input){
//     const output=[];
//     for(let dataItem of input.data){
//         // console.log(item);
//         let outputItem={};
//         for(let j=0;j<dataItem.length;j++ ){
//             outputItem[input.column[j].name]=dataItem[j];
//         }
//         output.push(outputItem);
//     }
//     return output;
// }

// function parseData({ data, column }) {
//   const output = data.map((value) => {
//     const result = {};
//     column.forEach((colvalue, index) => {
//       result[colvalue.name] = value[index];
//     });
//     return result;
//   });
//   return output;
// }

function parseData({ data, column }) {
  const columns = [];
  column.forEach((o) => {
    columns.push(o.name);
  });
  return data.map((info) => {
    const result = info.reduce((result, value, index) => {
      result[columns[index]] = value;
      return result;
    }, {});
    return result;
  });
}
export { parseData };
