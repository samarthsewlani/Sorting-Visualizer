export function getBubbleSortAnims(array){
    var anims=[];
    for(let i=0;i<array.length;i++){
      for(let j=0;j<array.length-1;j++){
        anims.push([j+1,j]);
        var flag=false;
        if(array[j+1]<array[j]){
          [array[j],array[j+1]]=[array[j+1],array[j]];
          flag=true;
        }
        anims.push([j+1,j,flag]);
        anims.push([j+1,j]);
      }
    }
    return anims;
}