
import React, { useCallback } from 'react'
import styles from './Learn.module.css'



const Learn:React.FC=()=>{
    return (
        <div>{ console.log(padLeft("My original string",5))}
        <span className={styles.hatest}>{padLeft("My original string","most left string ")}</span>
        <GroceryApp products={[
            { name: "Oranges", votes: 0 },
            { name: "Bananas", votes: 0 }
          ]}></GroceryApp>

<CustomTodoList items={items}></CustomTodoList>
<MyComponent currentPerson={{
      firstName:'Sam',
      lastName:'Venables'
    }}/>

<div className={styles.flexContainer}>
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>
<div className={styles.ani}></div>

<div className={styles.moving}></div>

<div>
<p>Welcome! Here you can find the following things:</p>
    <ol>
      <li><a href="#logo"><em>Company's logo</em></a></li>
      <li><a href="#employees">List of employees</a></li>
    </ol>

    <h1>Company's logo</h1>
    <p>Company uses the following logos:</p>
    <ul>
      <li>New logo:
        <img alt=""
             src="https://www.testdome.com/content/images/logo/favicon_32x32.png"/></li>
      <li>Old logo:
        <img alt=""
         src="https://www.testdome.com/content/images/icons/order-bullet.png"/></li>
    </ul>

    <h1>List of employees</h1>
    
    <table>
      <tr>
        <th>First name</th>
        <th>Last name</th>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Williams</td>
      </tr>
      <tr>
        <td>James</td>
        <td>Smith</td>
      </tr>
    </table>
</div>
        </div>
    )
}
export default Learn;


// class Input extends React.PureComponent {
//   render() {
//     let {forwardedRef, ...otherProps} = this.props; 
//     return <input {...otherProps} ref={forwardedRef} />;
//   }
// }

// const TextInput = React.forwardRef((props, ref) => {
//   return <Input {...props} forwardedRef={ref} />
// });

// class FocusableInput extends React.Component {
  
//   ref = React.createRef()

//   render() {
//     return <TextInput ref={this.ref} />;
//   }

//   // When the focused prop is changed from false to true, 
//   // and the input is not focused, it should receive focus.
//   // If focused prop is true, the input should receive the focus.
//   // Implement your solution below:
//   componentDidUpdate(prevProps) {
//     if(this.props.focused===true && prevProps.focused===false){
//       ref.focus();
//     }
//   }
  
//   componentDidMount() {}
// }

// FocusableInput.defaultProps = {
//   focused: false
// };






enum LogLevel {
  ERROR,
  DEBUG,
  INFO,
  WARN

}

interface MyComponentProps{
  currentPerson:Person
}
interface MyComponentState{
  currentPerson:Person
}

interface Person{
  firstName:string,
  lastName:string 
}
class MyComponent extends React.PureComponent<MyComponentProps,MyComponentState> {
  constructor(props:MyComponentProps) {
    super(props);
    this.state = {currentPerson:{
      ...props.currentPerson
    }}
  }
  // state= {
  //   currentPerson:{
  //     firstName:'Sam',
  //     lastName:'Venables'
  //   }
  // }

  render(){
    // this.setState({currentPerson:{
    //   ...this.props.currentPerson
    // }});
    return (
      <>
        <Profile {...this.state.currentPerson} />
        <button onClick={this.handleClick}>Change Name</button>
      </>
    );
  }
  
  handleClick= () =>{
    const {currentPerson}= this.props;
    this.setState({currentPerson:{
      ...currentPerson,
      lastName:''+ Math.random()
    }},()=>{
      //console.log(this.state);
    });

    // this.setState((prevState,props)=>({
    //   currentPerson:{
    //     ...prevState.currentPerson,
    //     lastName:''+Math.random()
    //   }
    // }));

  }
}
//type ProfileProps=Person;

class Profile extends React.PureComponent<Person>{
  render(){
    const {firstName, lastName}=this.props;
    return (
      <span>{firstName} {lastName}</span>
    );
  }
  
}

enum Tristate {
  False,
  True,
  Unknown
}
console.log(Tristate[0]); // "False"
console.log(Tristate["False"]); // 0
console.log(Tristate[Tristate.False]); // "False"
console.log(Tristate.False);//0

// type TriState = 'yes' | 'no' | 'unknown';

// function logOutState(state:TriState) {
//   if (state === 'yes') {
//     console.log('User selected yes');
//   } else if (state == 'no') {
//     console.log('User selected no');
//   } else {
//     console.log('User has not made a selection yet');
//   }
// }

class Foo {
  foo = 123;
}

class Bar {
  bar = 123;
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
      console.log(arg.foo); // OK
      // console.log(arg.bar); // Error!
  }
  else {  // MUST BE Bar!
      // console.log(arg.foo); // Error!
      console.log(arg.bar); // OK
  }
}

doStuff(new Foo());


type LogLevelString= keyof typeof LogLevel;


function isLogLevelString(key:LogLevel|LogLevelString):key is LogLevelString{
  return (key as LogLevelString).replaceAll!==undefined;
}

function printImportant(key: LogLevelString, message: string):void;
function printImportant(key: LogLevel, message: string):void;
function printImportant(key:any,message:string){
  let num = key;
  if(isLogLevelString(key))
  {
    num = LogLevel[key];
  }
  
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant(LogLevel.INFO, "This is a info message");

printImportant("ERROR", "This is a message");

function findTwoSum(numbers:Array<number>, sum:number) {
    let results=[];
    for(var i=0;i<numbers.length;i++){
      for(var j=i+1;j<numbers.length;j++){
        if((numbers[i]+numbers[j])===sum){
          results.push({i,j});
        }
      }
    }
    return results;
  }
  
  const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
  console.log(indices);

/*-------------------------------------------------------------------------------------------------- */
const padLeft= (originalStr:string,padding:number|string) =>{
    if(typeof padding == "number"){
        return Array(padding+1).join(" ")+originalStr;
    }
    else {
        return padding + originalStr;
    }
}

const TodoItem = (props:any) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component<TodoListProp> {
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item:any, index:number) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item:any,event:any) {
    // Write your code here
    if(item.done!==true){
    this.props.onItemClick(item,event);}
}
}
const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const CustomTodoList = (props:any) => <TodoList
  items={props.items}
  onListClick={() => console.log("List clicked!")}
  onItemClick={(item:any, event:any) => { 
    console.log(item, event) 
    }}
  ></TodoList>;


interface TodoListProp{
    items:Array<any>,
    onListClick():void|undefined,
    onItemClick(item:any, event:any):void|undefined
}

/*-------------------------------------------------------------------------------*/
const Product = (props:any) => {
    const plus = () => {
      // Call props.onVote to increase the vote count for this product
      props.onVote("up",props.index);
    };
    const minus = () => {
      // Call props.onVote to decrease the vote count for this product
      props.onVote("down",props.index);
    };
    return (
      <li>
        <span>{props.name}</span> - <span>votes: {props.votes}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };


  const GroceryApp = (props:any) => {
    let [products,setProducts] = React.useState(props.products);
    const onVote = useCallback((dir:string, index:number) => {
        const cloneProducts = [...products];
        //const product= cloneProducts.find(function(item){ return item.name===name;});
        const product= cloneProducts[index];
        if(dir==="up"){
            product.votes++;
        }
        else{
            product.votes--;
        }
        setProducts(cloneProducts);
    },[products]);
    return (
      <ul>
        {products.map((item:any,index:number) => (
           <Product index={index++} key={item.name} {...item} onVote={onVote}></Product>
        ))}
      </ul>
    );
  }
  /**----------------------------------------------------------------------------------------- */

