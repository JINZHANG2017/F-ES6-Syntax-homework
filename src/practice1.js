
function parseData(input){
    const output=[];
    for(let dataItem of input.data){	
        // console.log(item);
        let outputItem={};
        for(let value of dataItem ){
            for(let keyItem of input.column){
                outputItem[keyItem.name]=value;
            }
        }
        output.push(outputItem);
    }
    return output;
}
export { parseData };
