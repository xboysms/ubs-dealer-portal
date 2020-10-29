
import React, { useMemo } from 'react'
import {useState,useCallback} from 'react' 
function sum(a, b) {
    console.log('sum() ran');
    return a + b;
  }
  function test(a){

    return a+10;
  }
  export default function PlayGround() {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [c, serC] = useState(1000);
    const [name, setName] = useState('Jim');
  
    const result = useCallback(sum(val1, val2), [val1, val2]);
    const sinOfC = useMemo(() => Math.sin(c) , [c])
    return (
      <div className="App">
        <input
          value={val1}
          onChange={({ target }) =>
            setVal1(parseInt(target.value || 0, 10))
          }
        />
        <input
          value={val2}
          onChange={({ target }) =>
            setVal2(parseInt(target.value || 0, 10))
          }
        />
        <input
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          value={c}
          onChange={({ target }) => serC(target.value)}
        />
        <p>{result}</p>
        <p>{sinOfC}</p>
      </div>
    );
  }



