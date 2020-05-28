export function getInsertionSortAnims(array){
    var anims=[];
    for(let i=0;i<array.length;i++){
      var value=array[i];
      var hole=i;
      while(hole>0 && array[hole-1]>value){
        anims.push(["Mark",hole,hole-1]);
        anims.push(["Assignidx",hole,hole-1]);
        anims.push(["Unmark",hole,hole-1]);
        array[hole]=array[hole-1];
        hole-=1;
      }
      array[hole]=value;
      anims.push(["Assign",hole,value])
    }
    return anims;
}