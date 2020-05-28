import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slider from 'react-input-slider';
import { getBubbleSortAnims } from './sortingAlgorithms/bubbleSort';
import { getBubbleSortEffecientAnims } from './sortingAlgorithms/bubbleSortEffeceint';
import { getInsertionSortAnims } from './sortingAlgorithms/insertionSort';
import { getSelectionSortAlternateAnims } from './sortingAlgorithms/selectionSortAlternate';
import { getSelectionSortAnims } from './sortingAlgorithms/selectionSort';
import { getMergeSortAnims } from './sortingAlgorithms/mergeSort';

//https://seiyria.com/bootstrap-slider/


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      array:[],
      x:10,
    };
  }
  componentDidMount(){
    this.resetArray();
  }
  randomNumberIn(min,max){
		return Math.random() * (max - min) + min; 
	}
	resetArray(){
		const array=[];
		const size=60;
		for(let i=0;i<size;i++){
			array.push(parseInt(this.randomNumberIn(7,500)));
		}
		this.setState({
			array:array,
    });
    this.enableButtons();
  }
  getItems(){
    var items=[];
    const array=this.state.array.slice();
    for(let i=0;i<array.length;i++){
      const ht=array[i]+"px";
			let styles = {
        width: '1px',
        padding: '5px',
        margin: '5px',
        background: 'red',
				height: ht,
			};
      items.push(<div className="line" style={styles} key={i} ></div>)
    }
    return items;
  }
  disableButtons(){
    const able=document.getElementsByClassName("able");
    for(let i=0;i<able.length;i++){
      able[i].style.pointerEvents = 'none';
    }
    const span=document.getElementById("instruction");
    span.style.color='white';
  }
  enableButtons(){
    const able=document.getElementsByClassName("able");
    for(let i=0;i<able.length;i++){
      able[i].style.pointerEvents = 'auto';
    }
    const span=document.getElementById("instruction");
    span.style.color='black';
  }
  bubbleSort(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    var array=this.state.array.slice();
    const anims=getBubbleSortAnims(array);
    var lines=document.getElementsByClassName("line");
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? 'blue' : 'red';
        setTimeout(()=>{
          firstBarStyle.background=color;
          secondBarStyle.background=color;
        },i*ANIMATION_SPEED)
      }
      else{
        setTimeout(()=>{
          const [firstBarindex,secondBarindex,flag]=anims[i];
          const firstBarStyle=lines[firstBarindex].style;
          const secondBarStyle=lines[secondBarindex].style;
          if(flag){
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }
  bubbleSortEffecient(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    console.log(ANIMATION_SPEED);
    var array=this.state.array.slice();
    const anims=getBubbleSortEffecientAnims(array);
    var lines=document.getElementsByClassName("line");
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? 'navy' : 'red';
        setTimeout(()=>{
          firstBarStyle.background=color;
          secondBarStyle.background=color;
        },i*ANIMATION_SPEED)
      }
      else{
        setTimeout(()=>{
          const [firstBarindex,secondBarindex,flag]=anims[i];
          const firstBarStyle=lines[firstBarindex].style;
          const secondBarStyle=lines[secondBarindex].style;
          if(flag){
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }
  insertionSort(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    var array=this.state.array.slice();
    const anims=getInsertionSortAnims(array);
    var lines=document.getElementsByClassName("line");
    for(let i=0;i<anims.length;i++){
      const [type,val1,val2]=anims[i];
      if(type==="Mark"||type==="Unmark"){
        console.log(type,val1,val2);
        const color = type==="Mark" ?'blue':'red';
        const firstBarStyle=lines[val1].style;
        const secondBarStyle=lines[val2].style;
        setTimeout(()=>{
          firstBarStyle.background=color;
          secondBarStyle.background=color;
        },i*ANIMATION_SPEED)
      }
      else if (type==="Assignidx"){
        setTimeout(()=>{
          const firstBarStyle=lines[val1].style;
          const secondBarStyle=lines[val2].style;
          firstBarStyle.height=secondBarStyle.height;
        },i*ANIMATION_SPEED)
      }
      else{
        setTimeout(()=>{
          const firstBarStyle=lines[val1].style;
          const value=val2;
          firstBarStyle.height=value+'px';
        },i*ANIMATION_SPEED)
      }
    }

  }
  selectionSortAlternate(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    var array=this.state.array.slice();
    const anims=getSelectionSortAlternateAnims(array);
    var lines=document.getElementsByClassName("line");
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? 'navy' : 'red';
        setTimeout(()=>{
          firstBarStyle.background=color;
          secondBarStyle.background=color;
        },i*ANIMATION_SPEED)
      }
      else{
        setTimeout(()=>{
          const [firstBarindex,secondBarindex,flag]=anims[i];
          const firstBarStyle=lines[firstBarindex].style;
          const secondBarStyle=lines[secondBarindex].style;
          if(flag){
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }
  selectionSort(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    const array=this.state.array.slice();
    const anims=getSelectionSortAnims(array);
    for(let i=0;i<anims.length;i++){
      const type=anims[i][0];
      var lines=document.getElementsByClassName("line");
      if(type==="Start"){
        const [type,current]=anims[i];
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          currentBarStyle.background='magenta';
        },i*ANIMATION_SPEED)
      }
      else if(type==="End"){
        const [type,current]=anims[i];
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          currentBarStyle.background='red';
        },i*ANIMATION_SPEED)
      } 
      else if(type==="Change"){
        const [type,prev,current]=anims[i];
        const previousBarStyle=lines[prev].style;
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          previousBarStyle.background='red';
          currentBarStyle.background='magenta';
        },i*ANIMATION_SPEED)
      }
      else if(type==="Traverse"){
        const [type,index]=anims[i];
        const currentBarStyle=lines[index].style;
        setTimeout(()=>{
          currentBarStyle.background='navy';
        },i*ANIMATION_SPEED)
      }
      else if(type==="Retraverse"){
        const [type,index]=anims[i];
        const currentBarStyle=lines[index].style;
        setTimeout(()=>{
          currentBarStyle.background='red';
        },i*ANIMATION_SPEED)
      }
      else if(type==="Swap"){
        const [type,prev,current]=anims[i];
        const previousBarStyle=lines[prev].style;
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          [previousBarStyle.height,currentBarStyle.height]=[currentBarStyle.height,previousBarStyle.height];
          [previousBarStyle.background,currentBarStyle.background]=['red','red'];
        },i*ANIMATION_SPEED)
      }
    }
  }
  mergeSort(){
    this.disableButtons();
    const ANIMATION_SPEED=this.state.x;
    const array=this.state.array.slice();
    /*const [travserse,auxillary]=getMergeSortAnims(array);
    var i=0,j=0;
    var lines=document.getElementsByClassName("line");
    var index=0;
    var xStyle,yStyle,x,y;
    console.log(travserse);
    while(i<travserse.length && j<auxillary.length){
      index++;
      [x,y]=travserse[i];
      if(y<lines.length){
      setTimeout(()=>{
        [x,y]=travserse[i];
        //console.log(x,y,lines[x],lines[y],lines[x].style,lines[y].style);
        xStyle=lines[x].style;
        yStyle=lines[y].style;
        [xStyle.background,yStyle.background]=['navy','navy'];
      },i*30)}
      i+=1;
      index++;
      const [idx,value]=auxillary[j];
      const barStyle=lines[idx].style;
      setTimeout(()=>{
        barStyle.height=value+'px';
      },j*30)
      j+=1;
      index++;
      const [idx2,value2]=auxillary[j];
      const newbarStyle=lines[idx2].style;
      setTimeout(()=>{
        newbarStyle.height=value2+'px';
      },j*30)
      j+=1;
      index++;
      
      if(y<lines.length){
      setTimeout(()=>{
        [x,y]=travserse[i];
        xStyle=lines[x].style;
        yStyle=lines[y].style;
        [xStyle.background,yStyle.background]=['red','red'];
      },i*30)}
      i+=1;
    }*/
    const anims=getMergeSortAnims(array);
    console.log(anims);
    var lines=document.getElementsByClassName("line");
    for(let i=0;i<anims.length;i++){
      if(i%4==0 || i%4==3){
        const [x,y]=anims[i];
        const xStyle=lines[x].style;
        var yStyle;
        if(y<lines.length) yStyle=lines[y].style;
        else yStyle=lines[x].style;
        const color= i%4==0 ?'red':'red';
        setTimeout(()=>{
          [xStyle.background,yStyle.background]=[color,color];
        },i*ANIMATION_SPEED)
      }
      else{
        const [x,value]=anims[i];
        const xStyle=lines[x].style;
        setTimeout(()=>{
          xStyle.height=value+'px';
        },i*ANIMATION_SPEED)
      }
    }
  }
  handleChange(value){
    this.setState({x:value})
  }
  render(){
    const items=this.getItems();
    const able=document.getElementsByClassName("able");
    console.log("Rendered");
    for(let i=0;i<able.length;i++){
      able[i].style.pointerEvents = 'auto';
    }
    const wrapperStyle = { width: 400, margin: 50 };
    return(
      <div>
        <ul>
          <li><a>Sorting Visualiser</a></li>
          <li><a onClick={()=>this.resetArray()}>Reset Array</a></li>
          <li className="able"><a onClick={()=>this.bubbleSort()}>Bubble Sort</a></li>
          <li className="able"><a onClick={()=>this.bubbleSortEffecient()}>Bubble Sort(Effecient)</a></li>
          <li className="able"><a onClick={()=>this.insertionSort()}>Insertion Sort</a></li>
          <li className="able"><a onClick={()=>this.selectionSort()}>Selection Sort</a></li>
          <li className="able"><a onClick={()=>this.selectionSortAlternate()}>Selection Sort(Alternate)</a></li>
          <li className="able"><a onClick={()=>this.mergeSort()}>Merge Sort</a></li>
          <span>Select speed</span>
          <Slider
            axis="x"
            x={this.state.x}
            xmin={2}
            onChange={({ x }) => this.setState({ ...this.state, x })}
          />
          <li id="instruction">Reset Array for another simulation</li>
        </ul>
        <div className="flexbox">
          {items}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


