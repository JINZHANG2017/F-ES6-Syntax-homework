// function inject(items, sections){
//     let output =[];
//     for(let i=0;i<sections.length;i++){
//         let temp=[];
//         if(i<sections.length-1){
//             temp=[sections[i].content,...items.slice(sections[i].index,sections[i+1].index)];
//         }else{
//             temp=[sections[i].content,...items.slice(sections[i].index)];
//         }
//         output=[...output,...temp];
//     }
//     return output;
// }

function inject(items, sections){
    //通过index排序
    sections.sort((a,b)=>b.index-a.index);
    sections.forEach((cur) =>{
        //在index处删除0个，添加content
        items.splice(cur.index,0,cur.content);
    })
    return items;
}

export { inject };
