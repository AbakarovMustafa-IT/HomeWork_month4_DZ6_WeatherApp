import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { createConnection } from "./pages/page2";


/* СЕКУНДОМЕР
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>Seconds: {this.state.seconds}</div>;
  }
}

export default Timer;
*/

/* КРЕСТИКИ-НОЛИКИ
// class Square extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: null
//     }
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => this.setState({
//         value: "X",
//       })}
//       >
//         {this.state.value}
//       </button >
//     )
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner " + winner
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Game;

*|


/* ColorChangingSquares
class ColorChangingSquares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      square1Color: 'red',
      square2Color: 'blue',
    };
  }

  handleSquareClick = () => {
    this.setState((prevState) => ({
      square1Color: prevState.square2Color,
      square2Color: prevState.square1Color,
    }));
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleSquareClick}
          className={`square ${this.state.square1Color === 'red' ? 'red-square' : 'blue-square'}`}
        ></div>
        <div
          onClick={this.handleSquareClick}
          className={`square ${this.state.square2Color === 'red' ? 'red-square' : 'blue-square'}`}
        ></div>
      </div>
    );
  }
}

export default ColorChangingSquares;
*/

/*
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  }

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  return (
    <div>
      <h1>Список задач</h1>
      <input
        type="text"
        placeholder="Добавить задачу"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Добавить</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
*/

// const [state, setState] = useState(initialState)

/*
export default function Form() {
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Straysi",
    email: "barbara1960@gmail.com"
  })

  return (
    <>
      <label>
        first Name:
        <input
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            })
          }}>
        </input>
      </label>

      <label>
        last Name:
        <input
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            })
          }}>
        </input>
      </label>

      <label>
        email:
        <input
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            })
          }}>
        </input>
      </label>
      <p>
        {form.firstName}
        {""}
        {form.lastName}
        {""}
        {form.email}
        {""}
      </p>
    </>
  )
}
*/
/*
export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    // Здесь обновляем состояние formData после нажатия кнопки "Отправить"
    setFormData({
      fullName: e.target.fullName.value,
      phoneNumber: e.target.phoneNumber.value,
      email: e.target.email.value,
    });
  };

  return (
    <div className="registration-form">
      <h2>Регистрация пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ФИО:</label>
          <input type="text" name="fullName" />
        </div>
        <div className="form-group">
          <label>Номер телефона:</label>
          <input type="tel" name="phoneNumber" />
        </div>
        <div className="form-group">
          <label>Email адрес:</label>
          <input type="email" name="email" />
        </div>
        <button type="submit">Отправить</button>
      </form>
      <div className="display-data">
        <h3>Ваши данные:</h3>
        <p>ФИО: {formData.fullName}</p>
        <p>Номер телефона: {formData.phoneNumber}</p>
        <p>Email адрес: {formData.email}</p>
      </div>
    </div>
  );
};
*/

// LESSON 5

// export default function App() {
//   const [version, setVersion] = useState(0);

//   function handleReset() {
//     setVersion(version + 1)
//   }

//   return (
//     <>
//       <button onClick={handleReset}>Reset</button>
//       <Form key={version} />
//     </>
//   )
// }

// function Form() {
//   const [name, setName] = useState("Clark");

//   return (
//     <>
//       <input value={name} onChange={e => setName(e.target.value)}></input>
//       <p>Hello, {name}</p>
//     </>
//   )
// }

// Work with massive: TODE Example

// let nextId = 0;

// export default function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Известные Скульптуры:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />

//       <button
//         onClick={() => {
//           setArtists([...artists, { id: nextId++, name: name }]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artists) => (
//           <li key={artists.id}>{artists.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// HomeWork
// export default function Userform() {
//   const [form, setForm] = useState({
//     firstName: "Barbara",
//     lastName: "Hepworth",
//     email: "bhepworth@react.com",
//     fact: "love cats"
//   })

//   const containerDiv = {
//     margin: '0 auto',
//     padding: '0',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '50%',
//     height: '100vh'
//   }

//   const formContainer = {
//     margin: "0",
//     padding: "0",
//     width: "250px",
//     height: "290px",
//     display: "flex",
//     flexDirection: "column",
//     border: "2px solid green",
//     borderRadius: '5px',
//     gap: "3px",
//   }

//   const labelStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     textAlign: 'center',
//     color: '#E98080'
//   }

//   const inputStyle = {
//     display: 'flex',
//     color: '#321124',
//     backgroundColor: '#D8C3A5',
//     border: '2px solid #E85A4F',
//     alignSelf: 'center'
//   }

//   const underInput = {
//     margin: '0',
//     color: 'black',
//     textAlign: 'center'
//   }

//   return (
//     <>
//       <div style={containerDiv}>
//         <div style={formContainer}>
//           <label style={labelStyle}>
//             First Name:
//             <input style={inputStyle} value={form.firstName} onChange={e => {
//               setForm({
//                 ...form,
//                 firstName: e.target.value
//               })
//             }}
//             />
//           </label>
//           <p style={underInput}>{form.firstName}</p>

//           <label style={labelStyle}>
//             Last Name:
//             <input style={inputStyle} value={form.lastName} onChange={e => {
//               setForm({
//                 ...form,
//                 lastName: e.target.value
//               })
//             }}
//             />
//           </label>
//           <p style={underInput}>{form.lastName}</p>

//           <label style={labelStyle}>
//             Email:
//             <input style={inputStyle} value={form.email} onChange={e => {
//               setForm({
//                 ...form,
//                 email: e.target.value
//               })
//             }}
//             />
//           </label>
//           <p style={underInput}>{form.email}</p>

//           <label style={labelStyle}>
//             Fact:
//             <input style={inputStyle} value={form.fact} onChange={e => {
//               setForm({
//                 ...form,
//                 fact: e.target.value
//               })
//             }}
//             />
//           </label>
//           <p style={underInput}>{form.fact}</p>

//         </div>
//       </div>
//     </>
//   )
// }

// Lesson 6


// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState("https://localhost:12345");


//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect()
//     return () => {
//       connection.disconnect();
//     }
//   }, [serverUrl, roomId])

//   return (
//     <>
//       <label>
//         Server URL:("")
//         <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//     </>
//   )
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       <label>
//         Choose the chat room:{""}
//         <select value={roomId} onChange={e => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Close chat" : "Open chat"};
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   )
// }

// Lesson 6 - homework weather app
function App() {
  const [data, setData] = useState({});
  const [location, setlocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5f16289cfa6e2e851c31b666309a9c9d`

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setlocation("");
      console.log(data);
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setlocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="enter name"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed() - 273}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <h1>{data.weather[0].description}</h1> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed() - 273}°C</p>
              ) : null}
              <p>feels like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()}m/sec</p>
              ) : null}
              <p>wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
