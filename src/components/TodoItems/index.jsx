import { Button, Checkbox } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { delete_todo, edit_todo, toggle_todo } from '../../store/actions'


const ItemContainer = ({ after, children }) => {
    return after ? <Item>{children}</Item> : <Item after>{children}</Item>
}

    const Item = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0;
background-color: ${(props) => {
        return props.after ? 'pink':'beige'
}};
padding: 8px;
border-radius: 5px;
`
export const TodoItem = ({ todo, id, currentFilter }) => {
    const dispatch = useDispatch();

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
    dispatch(toggle_todo(id, e.target.checked))
    }

    const deadline = moment(todo.deadline).format('MMMM Do YYYY');
    const after = moment(todo.deadline).isAfter(moment())
    return (
        <ItemContainer after={after}>
            {/* <div
                style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}
                onChange={(e) => console.log(e.currentTarget.textContent)} contentEditable='true'>
                <h3>{todo.text}</h3>
            </div> */}
            {/* <h2>dhaodhfhahefahofjjsojfoajdjfoaidjojvaodjoj</h2>
            <h2>1253653563243644646678578578548</h2> */}

            <input
            disabled={currentFilter !== 'ALL'}
            style={{ border: 'none', background: 'none' }}
            type="text" value={todo.text}
            onChange={(e) => {
                console.log(e.target.value)
                dispatch(edit_todo(id, e.target.value))
            }} />

            <i style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>{deadline}</i>
             <div>
            <Checkbox checked={todo.checked} style={{marginRight: 10}} onChange={onChange}></Checkbox>
                <Button type='primary' danger onClick={() => { dispatch(delete_todo(id)) }}>delete</Button>
            </div>
        </ItemContainer>
    )
}

// ----------------------
//     import React, { useState } from 'react';
// import './Main.css'

// function Main() {
//   const [value, setValue] = useState();
//   const [value1, setValue1] = useState();


//   const press = (event) => {
//     if (event.key === 'Enter' && value !== '') {
//       setValue1(value);
//       setValue('');
//     }
//   };
//   return (
//     <div>
//       <h1>Tic-toc-toe</h1>
//       <p>Who will be first</p>
//       <div>
//         <div>
//           <button>O</button>
//           <button>X</button>
//         </div>
//         <input
//           type="number"
//           value={value}
//           onKeyPress={press}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </div>
//       <div>
//         <h4>The winner is Player 1</h4>
//         <p>movies 3</p>
//       </div>
//       <button>restart</button>
//       <ul>
//         <li className="row">{value1}</li>
//         {/* {square.map((item, index) => {
//                     return (
//                         <li className="row">{item}</li>
//                     )
//                 })} */}
//       </ul>
//     </div>
//   );
// }

// export default Main;



// ----------------
//  body{
//      background: purple;
//      color: white;
//      text-align: center;
//  } 
//  .square{
//   width: 500px;
//   height: 500px;
//   background-color: aquamarine;
//   border: 1px solid black;
//   display: flex;
//   flex-wrap: wrap;
// }


// .row {
//   height: 164px;
//   width: 164px;
//   border: 1px solid black;
//   cursor: pointer;
//   display: flex;
//   color: black;
//   font-family: Arial, Helvetica, sans-serif;
// }