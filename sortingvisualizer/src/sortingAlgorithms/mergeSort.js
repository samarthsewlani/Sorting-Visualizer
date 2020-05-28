var auxillary=[];
var traverse=[];

function merge(array,start,middle,end){
    var auxillaryArray=[];
    var first,second,flength,slength;
    var flengthstart=0,slengthstart=0;
    [first,second]=[array.slice(start,middle+1),array.slice(middle+1,end+1)];
    [flength,slength]=[middle-start+1,end-middle];
    [flengthstart,slengthstart]=[middle-start+1,end-middle];
    while(flength>0 && slength>0){
        if(first[0]<second[0]){
            auxillaryArray.push(first.shift());
            flength-=1;
        }
        else{
            auxillaryArray.push(second.shift());
            slength-=1;
        }  
       // traverse.push([start+flengthstart-flength,end-slength+1]);
        //traverse.push([start+flengthstart-flength,end-slength+1]);
        //console.log(start+flengthstart-flength,end-slength+1,array[start+flengthstart-flength],array[end-slength+1]);
    }
    for(let i=0;i<middle;i++){
        traverse.push([middle+i,start+i]);
        traverse.push([middle+i,start+i]);
    }
    if(flength>0){
        auxillaryArray=auxillaryArray.concat(first);
    }
    if(slength>0){
        auxillaryArray=auxillaryArray.concat(second);
    }
    for(let i=0;i<end-start+1;i++){
        array[i+start]=auxillaryArray[i];
        
        auxillary.push([i+start,auxillaryArray[i]]);
    }
}


function mergeSort(array,start,end){
    if(start!==end){
        mergeSort(array,start,start+((end-start)/2)>>0);
        mergeSort(array,(start+((end-start)/2)>>0)+1,end);

        merge(array,start,start+((end-start)/2)>>0,end);
    }
}

export function getMergeSortAnims(array){
    auxillary=[];
    traverse=[];
    mergeSort(array,0,array.length-1);
    var i=0,j=0;
    var anims=[];
    console.log(traverse,auxillary); 
    while(i<traverse.length && j<auxillary.length){
        anims.push(traverse[i]);
        i+=1;
        anims.push(auxillary[j]);
        j+=1;
        anims.push(auxillary[j]);
        j+=1;
        anims.push(traverse[i]);
        i+=1;
    }
    console.log(anims.length);
    return anims;

}