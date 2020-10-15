function inject(items, sections){
    let output =[];
    for(let i=0;i<sections.length;i++){
        let temp=[];
        if(i<sections.length-1){
            temp=[sections[i].content,...items.slice(sections[i].index,sections[i+1].index)];
        }else{
            temp=[sections[i].content,...items.slice(sections[i].index)];
        }
        output=[...output,...temp];
    }
    return output;
}
export { inject };
