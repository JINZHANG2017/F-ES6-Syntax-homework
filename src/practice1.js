function parseData(input){
    const output=[];
    for(let dataItem of input.data){	
        // console.log(item);
        let outputItem={};
        for(let j=0;j<dataItem.length;j++ ){
            outputItem[input.column[j].name]=dataItem[j];
        }
        output.push(outputItem);
    }
    return output;
}
export { parseData };
