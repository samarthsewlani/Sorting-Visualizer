export function getSelectionSortAnims(array){
    var anims=[];
    for(let i=0;i<array.length;i++){
        var minidx=i;
        anims.push(["Change",minidx,minidx]);
        anims.push(["Start",i]);
        for(let j=i+1;j<array.length;j++){
            anims.push(["Traverse",j]);
            if(array[j]<array[minidx]){
                anims.push(["Change",minidx,j]);
                if(minidx===i)    anims.push(["Start",i]);
                minidx=j;
            }
            else{
                anims.push(["Retraverse",j]);
            }
            
        }
        [array[i],array[minidx]]=[array[minidx],array[i]];
        anims.push(["Swap",minidx,i]);
        anims.push(["End",i]);
    }
    console.log(array);
    return anims;
}