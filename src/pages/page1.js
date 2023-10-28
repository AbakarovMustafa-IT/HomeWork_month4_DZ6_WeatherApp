import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';


// export default function Counter() {
//   const [age, setAge] = useState(0);

//   function increment() {
//     setAge(a => a + 1)
//   }

//   return (
//     <>
//       <h1>Your Age: {age}</h1>
//       <button onClick={() => {
//         increment()
//         increment()
//         increment()
//         increment()
//         increment()
//       }}>+5</button>
//       <button onClick={() => {
//         increment()
//       }}>+1</button>
//     </>
//   )
// }

// Lesson 6
export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times");
  }

  return (
    <button onClick={handleClick}>
      CLick me!!
    </button>
  )
}
