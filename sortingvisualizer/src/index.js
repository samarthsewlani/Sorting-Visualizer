import React from 'react';             //Import React
import ReactDOM from 'react-dom';     //Import ReactDOM
import './index.css';                 //Import CSS file
import Slider from 'react-input-slider';    //Import the Slider(which is downloaded by using the command 'npm install react-input-slider --save')'
import { Helmet } from 'react-helmet'     //Import React Helmet which is used to change the title of Web App
import { getBubbleSortAnims } from './sortingAlgorithms/bubbleSort';                            //Import the function from the specified directory
import { getBubbleSortEffecientAnims } from './sortingAlgorithms/bubbleSortEffeceint';          //Import the function from the specified directory
import { getInsertionSortAnims } from './sortingAlgorithms/insertionSort';                      //Import the function from the specified directory
import { getSelectionSortAlternateAnims } from './sortingAlgorithms/selectionSortAlternate';    //Import the function from the specified directory
import { getSelectionSortAnims } from './sortingAlgorithms/selectionSort';                      //Import the function from the specified directory
import { getMergeSortAnims } from './sortingAlgorithms/mergeSort';                              //Import the function from the specified directory
import { getQuickSortAnims } from './sortingAlgorithms/quickSort';                              //Import the function from the specified directory

//https://seiyria.com/bootstrap-slider/   //Link for various Sliders


class App extends React.Component{

  //Constructor of the APP which contains 'array' and 'x'
  constructor(props){
    super(props);
    this.state={
      array:[],   //This array is used to store the values(height) of the lines
      x:10,       //This is the slider value variable which is used to take the input of ANIMATION SPEED
      PRIMARY_COLOR : 'red',
      SECONDARY_COLOR : 'navy',
      TERNARY_COLOR : 'green',
    };
  }

  //This function is is invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount(){
    //document.title="Sorting Visualizer";    //This is alternate way to change the title of Web App
    this.resetArray();    
  }

  //This function takes parameter min and max and returns a random number in the range
  randomNumberIn(min,max){
		return Math.random() * (max - min) + min; 
  }
  
  //This function resets the value in the array(state variable)
	resetArray(){
		const array=[];   //Note that we do not change the state variable array but initialise new variable and assign this to the array variable(in state)
		const size=60;
		for(let i=0;i<size;i++){
			array.push(parseInt(this.randomNumberIn(7,500)));
		}
		this.setState({     //Set the state to the new array
			array:array,
    });
    this.enableButtons();   //Enable all the buttons 
  }

  //This function return an array of jsx divisions(lines) with the height specified by values in the array variable of state
  getItems(){
    var items=[];
    const array=this.state.array.slice();
    for(let i=0;i<array.length;i++){
      const ht=array[i]+"px";     //Giving the height corresponding to certain value
			let styles = {        //Using the inline styling
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

  //This funcition disables all the buttons
  disableButtons(){
    const able=document.getElementsByClassName("able");
    for(let i=0;i<able.length;i++){
      able[i].style.pointerEvents = 'none';     //Setting the pointer events to none so it becomes unclickable(not responsive)
    }
    const span=document.getElementById("instruction");    //Display the instruction when buttons are disabled
    span.style.color='white';
  }

  //This function enables all the buttons
  enableButtons(){
    const able=document.getElementsByClassName("able");
    for(let i=0;i<able.length;i++){
      able[i].style.pointerEvents = 'auto';       //Setting the pointer events to auto so it becomes clickable(responsive)
    }
    const span=document.getElementById("instruction");    //Hide the instruction since buttons are now enabled
    span.style.color='black';
  }

  //This function handles animations of BubbleSort
  bubbleSort(){
    this.disableButtons();                    //Disable the buttons
    const ANIMATION_SPEED=this.state.x;       //Get the animation speed from state
    var array=this.state.array.slice();
    const anims=getBubbleSortAnims(array);    //Get the animation from Bubble Sort file
    var lines=document.getElementsByClassName("line");    //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state

    //The animations are divided into triplets.
    //First element of this triplet tells which two elements are in comparision
    //Second element tells whether the two elements we are comparing must be swapped or not.
    //Third element is used to change the color of elements in comparision back to primary color    
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? SECONDARY_COLOR : PRIMARY_COLOR;      //Change the color to primary or secondary depending upon element
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
          if(flag){                                         //Interchange the height of the lines
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function handles animations of BubbleSortEffecient
  bubbleSortEffecient(){
    this.disableButtons();                      //Disable the buttons
    const ANIMATION_SPEED=this.state.x;         //Get the animation speed from state
    var array=this.state.array.slice();
    const anims=getBubbleSortEffecientAnims(array);     //Get the animation from Bubble Sort Effecient file
    var lines=document.getElementsByClassName("line");   //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state

    //The animations are divided into triplets.
    //First element of this triplet tells which two elements are in comparision
    //Second element tells whether the two elements we are comparing must be swapped or not.
    //Third element is used to change the color of elements in comparision back to primary color 
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? SECONDARY_COLOR : PRIMARY_COLOR;      //Change the color to primary or secondary depending upon element
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
          if(flag){                                         //Interchange the height of the lines
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function handles animations of InsertionSort
  insertionSort(){
    this.disableButtons();                                //Disable the buttons
    const ANIMATION_SPEED=this.state.x;                   //Get the animation speed from state
    var array=this.state.array.slice();
    const anims=getInsertionSortAnims(array);             //Get the animation from Insertion Sort file
    var lines=document.getElementsByClassName("line");    //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state

    //All elements in anims are given a string to specify what type of animation should be done
    //Mark and Unmark are used to change the color of the lines to primary or secondary
    //Assignidx is used to specify that height of which line should be overwritten by height of which line(by specifying the index of the lines)
    //Assign is used to specify that height of which line(by index) should be overwritten by what value
    for(let i=0;i<anims.length;i++){
      const [type,val1,val2]=anims[i];
      if(type==="Mark"||type==="Unmark"){
        const color = type==="Mark" ? SECONDARY_COLOR : PRIMARY_COLOR;
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
          firstBarStyle.height=secondBarStyle.height;   //Assign the height of second line to first
        },i*ANIMATION_SPEED)
      }
      else{
        setTimeout(()=>{
          const firstBarStyle=lines[val1].style;
          const value=val2;
          firstBarStyle.height=value+'px';    //Assign the height of the line to the specified value
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function handles animations of SelectionSortAlternate
  selectionSortAlternate(){
    this.disableButtons();                                //Disable the buttons
    const ANIMATION_SPEED=this.state.x;                   //Get the animation speed from state
    var array=this.state.array.slice();
    const anims=getSelectionSortAlternateAnims(array);   //Get the animation from Selection Sort Alternate file
    var lines=document.getElementsByClassName("line");   //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state

    //The animations are divided into triplets.
    //First element of this triplet tells which two elements are in comparision
    //Second element tells whether the two elements we are comparing must be swapped or not.
    //Third element is used to change the color of elements in comparision back to primary color
    for(let i=0;i<anims.length;i++){
      if(i%3!==1){
        const [firstBarindex,secondBarindex]=anims[i];
        const firstBarStyle=lines[firstBarindex].style;
        const secondBarStyle=lines[secondBarindex].style;
        const color= i%3===0 ? SECONDARY_COLOR : PRIMARY_COLOR ;        //Change the color to primary or secondary depending upon element
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
          if(flag){                                         //Interchange the height of the lines
            [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
          }
        },i*ANIMATION_SPEED)
      }
    }
  }


  //This function handles animations of SelectionSort
  selectionSort(){
    this.disableButtons();                                //Disable the buttons
    const ANIMATION_SPEED=this.state.x;                   //Get the animation speed from state
    const array=this.state.array.slice();
    const anims=getSelectionSortAnims(array);             //Get the animation from Selection Sort file
    var lines=document.getElementsByClassName("line");    //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state
    const TERNARY_COLOR=this.state.TERNARY_COLOR;         //Getting the ternary color from state

    //All elements in anims are given a string to specify what type of animation should be done
    //Start is used to mark the line with ternary color(which specify the line which is to be swapped)
    //End is used to revert the primary color
    //Change is used to mark the line with ternary color(which is the minimum and will be swapped)
    //Traverse and Retraverse are used to assign primary or secondary color to the two lines we are traversing
    //Swap denotes which two lines is to be swapped(by their indices)
    for(let i=0;i<anims.length;i++){
      const type=anims[i][0];
      if(type==="Start"){
        const [type,current]=anims[i];
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          currentBarStyle.background=TERNARY_COLOR;       //Change the color to ternary
        },i*ANIMATION_SPEED)
      }
      else if(type==="End"){
        const [type,current]=anims[i];
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          currentBarStyle.background=PRIMARY_COLOR;           //Change the color back to primary
        },i*ANIMATION_SPEED)
      } 
      else if(type==="Change"){
        const [type,prev,current]=anims[i];
        const previousBarStyle=lines[prev].style;
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{
          previousBarStyle.background=PRIMARY_COLOR;          //Change the previous minimum value back to primary color
          currentBarStyle.background=TERNARY_COLOR;       //Change the current minimum value to ternary color
        },i*ANIMATION_SPEED)
      }
      else if(type==="Traverse"){
        const [type,index]=anims[i];
        const currentBarStyle=lines[index].style;
        setTimeout(()=>{
          currentBarStyle.background=SECONDARY_COLOR;          //Change the color to secondary of two lines traversing 
        },i*ANIMATION_SPEED)
      }
      else if(type==="Retraverse"){
        const [type,index]=anims[i];
        const currentBarStyle=lines[index].style;
        setTimeout(()=>{
          currentBarStyle.background=PRIMARY_COLOR;           //Change the color of lines back to primary color
        },i*ANIMATION_SPEED)
      }
      else if(type==="Swap"){
        const [type,prev,current]=anims[i];
        const previousBarStyle=lines[prev].style;
        const currentBarStyle=lines[current].style;
        setTimeout(()=>{                              //Swap the lines and change their color back to primary color
          [previousBarStyle.height,currentBarStyle.height]=[currentBarStyle.height,previousBarStyle.height];
          [previousBarStyle.background,currentBarStyle.background]=[PRIMARY_COLOR,PRIMARY_COLOR];
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function handles animations of MergeSort
  mergeSort(){
    this.disableButtons();                                //Disable the buttons
    const ANIMATION_SPEED=this.state.x;                   //Get the animation speed from state
    const array=this.state.array.slice();
    const anims=getMergeSortAnims(array);                 //Get the animation from Merge Sort file
    var lines=document.getElementsByClassName("line");    //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;         //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;     //Getting the secondary color from state
    
    //Animations only denote which value(by index) should be overwritten by what value
    for(let i=0;i<anims.length;i++){
      if(i%4===0 || i%4===3){
        const [x,y]=anims[i];
        const xStyle=lines[x].style;
        var yStyle;
        if(y<lines.length) yStyle=lines[y].style;
        else yStyle=lines[x].style;
        const color= i%4===0 ?'red':'red';
        setTimeout(()=>{
          [xStyle.background,yStyle.background]=[color,color];
        },i*ANIMATION_SPEED)
      }
      else{
        const [x,value]=anims[i];
        const xStyle=lines[x].style;
        setTimeout(()=>{
          xStyle.height=value+'px';    //Assign the height of the line to the specified value
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function handles animations of QuickSort
  quickSort(){
    this.disableButtons();                                //Disable the buttons
    const ANIMATION_SPEED=this.state.x;                   //Get the animation speed from state
    var array=this.state.array.slice();
    const anims=getQuickSortAnims(array);                   //Get the animation from Quick Sort file
    const lines=document.getElementsByClassName("line");    //Get all the lines from HTML(DOM)
    const PRIMARY_COLOR=this.state.PRIMARY_COLOR;           //Getting the primary color from state
    const SECONDARY_COLOR=this.state.SECONDARY_COLOR;       //Getting the secondary color from state
    const TERNARY_COLOR=this.state.TERNARY_COLOR;           //Getting the ternary color from state
    var firstBarStyle,secondBarStyle; 

    //All elements in anims are given a string to specify what type of animation should be done
    //Traverse and Retraverse are used to assign primary or secondary color to the two lines we are traversing
    //Pivot is used to mark the pivot element by ternary color
    //Unpivot is used to revert the primary color of the pivot element after partitioning
    //Swap is used to denote which two lines should be swapped(by indices)
    for(let i=0;i<anims.length;i++){
      if(anims[i][0]==="Traverse"){
        const [type,firstBarIndex,secondBarIndex]=anims[i];
        setTimeout(()=>{
          [firstBarStyle,secondBarStyle]=[lines[firstBarIndex].style,lines[secondBarIndex].style];
          [firstBarStyle.background,secondBarStyle.background]=[SECONDARY_COLOR,SECONDARY_COLOR];
        },i*ANIMATION_SPEED)
      }
      else if(anims[i][0]==="Retraverse"){
        const [type,firstBarIndex,secondBarIndex]=anims[i];
        setTimeout(()=>{
          [firstBarStyle,secondBarStyle]=[lines[firstBarIndex].style,lines[secondBarIndex].style];
          [firstBarStyle.background,secondBarStyle.background]=[PRIMARY_COLOR,PRIMARY_COLOR];
        },i*ANIMATION_SPEED)
      }
      else if(anims[i][0]==="Pivot"){
        const [type,firstBarIndex]=anims[i];
        setTimeout(()=>{
          firstBarStyle=lines[firstBarIndex].style;
          firstBarStyle.background=TERNARY_COLOR;
        },i*ANIMATION_SPEED)
      }
      else if(anims[i][0]==="Unpivot"){
        const [type,firstBarIndex]=anims[i];
        setTimeout(()=>{
          firstBarStyle=lines[firstBarIndex].style;
          firstBarStyle.background=PRIMARY_COLOR;
        },i*ANIMATION_SPEED)
      }
      else{
        const [type,firstBarIndex,secondBarIndex]=anims[i];
        setTimeout(()=>{
          [firstBarStyle,secondBarStyle]=[lines[firstBarIndex].style,lines[secondBarIndex].style];
          [firstBarStyle.height,secondBarStyle.height]=[secondBarStyle.height,firstBarStyle.height];
        },i*ANIMATION_SPEED)
      }
    }
  }

  //This function is used to set the value of x in state to the value selected in slider
  handleChange(value){
    this.setState({x:value})
  }

  render(){
    const items=this.getItems();
    return(
      <div>
        <Helmet>
          <title>Sorting Visualizer</title>
        </Helmet>
        <ul>
          <li><a>Sorting Visualiser</a></li>
          <li><a onClick={()=>this.resetArray()}>Reset Array</a></li>
          <li className="able"><a onClick={()=>this.bubbleSort()}>Bubble Sort</a></li>
          <li className="able"><a onClick={()=>this.bubbleSortEffecient()}>Bubble Sort(Effecient)</a></li>
          <li className="able"><a onClick={()=>this.insertionSort()}>Insertion Sort</a></li>
          <li className="able"><a onClick={()=>this.selectionSort()}>Selection Sort</a></li>
          <li className="able"><a onClick={()=>this.selectionSortAlternate()}>Selection Sort(Alternate)</a></li>
          <li className="able"><a onClick={()=>this.mergeSort()}>Merge Sort</a></li>
          <li className="able"><a onClick={()=>this.quickSort()}>Quick Sort</a></li>
          <li>
            <span>Animation speed</span>
          </li>
          <li className="able pad">
            <Slider
              axis="x"
              x={this.state.x}
              xmin={2}
              onChange={({ x }) => this.setState({ ...this.state, x })}
            />
          </li>
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


