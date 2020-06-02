var anims=[];

function partition(array,l,r){
    const pivot=array[l];
    anims.push(["Pivot",l]);
    var i,j;
    [i,j]=[l,r];
    while(i<j){
        do{
            i++;
            if (i<array.length-1 && j<array.length-1)   anims.push(["Traverse",i,j]);
            if (i<array.length-1 && j<array.length-1)   anims.push(["Retraverse",i,j]);
        }   while(array[i]<=pivot);
        do{
            j--;
            if (i<array.length-1 && j<array.length-1)   anims.push(["Traverse",i,j]);
            if (i<array.length-1 && j<array.length-1)   anims.push(["Retraverse",i,j]);
        }   while(array[j]>pivot);
        if(i<j){
            [array[i],array[j]]=[array[j],array[i]];
            if (i<array.length-1 && j<array.length-1) anims.push(["Swap",i,j]);
        } 
    }
    [array[l],array[j]]=[array[j],array[l]];
    if (l<array.length-1 && j<array.length-1)    anims.push(["Swap",l,j]);
    if (j<array.length-1)    anims.push(["Unpivot",j]);
    return j;
}

function quicksort(array,l,r){
    if(l<r){
        const mid=partition(array,l,r);
        quicksort(array,l,mid);
        quicksort(array,mid+1,r);
    }
}


export function getQuickSortAnims(array){
    anims=[];
    array.push(Number.MAX_SAFE_INTEGER);
    quicksort(array,0,array.length-1);
    array.pop();
    console.log(array);
    return anims;
}
