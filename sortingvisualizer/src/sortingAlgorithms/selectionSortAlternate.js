export function getSelectionSortAlternateAnims(array){
    var anims=[];
    for(let i=0;i<array.length;i++){
        for(let j=i;j<array.length;j++){
            var flag=false;
            if(array[i]>array[j]){
                flag=true;
                [array[i],array[j]]=[array[j],array[i]];
            }
            anims.push([i,j]);
            anims.push([i,j,flag]);
            anims.push([i,j]);
        }
    }
    return anims;
}