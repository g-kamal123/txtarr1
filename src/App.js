import { useState } from 'react';
import './App.css';
import {data} from './Data'

function App() {
  const txttoarr = data.split('\n')
  const d2arr =txttoarr.map((item)=>item.split(' > '))
  const a = d2arr.filter((item)=>item.length===1)
  // console.log(a)
 
  let arr =[];
  for(let i=0;i<d2arr.length;i++){
    for(let j=0;j<d2arr[i].length;j++){
      let curr = d2arr[i][j]
      if(arr[curr]===undefined)
      arr[curr] =[]
    }
  }
  for(let i=0;i<d2arr.length;i++){
    for(let j=1;j<d2arr[i].length;j++){
      let curr = d2arr[i][j-1]
      if(!arr[curr].includes(d2arr[i][j]))
      arr[curr].push(d2arr[i][j])
    }
  }
  // console.log(arr)
  const [print,setPrint] = useState([])
  const printHandler =(val)=>{
    setPrint([arr[val]])
  }
  const childrenHandler =(val,i)=>{
    let arr1 = print.slice(0,i+1)
    // console.log([...arr1,arr[val]])
    if(arr[val].length>0)
    setPrint([...arr1,arr[val]])
  }
  console.log(print)
  return (
    <div className="App">
      <select onChange={(event)=>printHandler(event.target.value)}>
        {a.map((item,i)=><option value={item[0]} key={i}>{item[0]}</option>)}
      </select>
     {print.map((item,i)=><select onChange={(event)=>childrenHandler(event.target.value,i)} key={i}>
     <option disabled>select</option>
      {item.map((it,k)=><>
      <option value={it} key={k*100}>{it}</option></>)
      }
     </select>)}
    </div>
  );
}

export default App;
