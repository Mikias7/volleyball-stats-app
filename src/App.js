
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Table, Alert, Navbar, Container} from 'react-bootstrap';
//import logo from './auLogo.svg';


 
function App() {

  //////////////////////////////////////////////////
  //team1 players
  const [player,setPlayer] = useState([]);
  const [id,setId] = useState();
  const [name,setName] = useState();

  //team1 
  function addPlayer(name,id){
    if (name){
      setName(name)
      setId(id)
      const newPlayer = player.concat({id: id, name: name, ace: 0, kill: 0});
      setPlayer(newPlayer);
      setId("");
      setName("");
    }
    else {
      return null
    }
    
  }

  //team1: set id
  function setNewId(id){
    const foundId = player.find(item => item.id === id);
    return foundId ? setId(): setId(id) //note tot self: change!!
  }


  //team1: add ace 
  function incrementAce(id){
     const updateList = player.map(item => {
      if (item.id === id) {
        return {...item, ace: item.ace + 1}
      }
      return item;
     })

     //update the state of player
     setPlayer(updateList)
    }

  //team1: subtract ace
  function decrementAce(id){
    const updateList = player.map(item => {
     if (item.id === id) {
       return {...item, ace: item.ace - 1}
     }
     return item;
    })
    
    //update the state of the new player
    setPlayer(updateList)
  }

  //team1: add kill
  function incrementKill(id){
    const updateList = player.map(item => {
     if (item.id === id) {
       return {...item, kill: item.kill + 1}
     }
     return item;
    })
    setPlayer(updateList)
  }
  //team1 subntract kill
  function decrementKill(id){
    const updateList = player.map(item => {
     if (item.id === id) {
       return {...item, kill: item.kill - 1}
     }
     return item;
    })
    
    //update the state of the new player
    setPlayer(updateList)
  
  }

  function removePlayer(id){
    const playerL = player.filter((item)=> item.id !== id);
    setPlayer(playerL)
  }
  //////////////////////////////////////////////////

  //team2 players
  const [player1,setPlayer1] = useState([]);
  const [id1,setId1] = useState();
  const [name1,setName1] = useState();

  //team2
  function addPlayer1(name1,id1){
    if (name1){
      setName1(name1)
      setId1(id1)
      const newPlayer1 = player1.concat({id1: id1, name1: name1, ace1: 0, kill1: 0});
      setPlayer1(newPlayer1);
      setId1("");
      setName1("");
    }
    else {
      return null
    }
    
  }

  //team2: set id
  function setNewId1(id1){
    const foundId1 = player1.find(item1 => item1.id1 === id1);
    return foundId1 ? setId1(): setId1(id1) //note tot self: change!!
  }


  //team2: add ace 
  function incrementAce1(id1){
     const updateList1 = player1.map(item1 => {
      if (item1.id1 === id1) {
        return {...item1, ace1: item1.ace1 + 1}
      }
      return item1;
     })

     //update the state of player
     setPlayer1(updateList1)
    }

  //team2: subtract ace
  function decrementAce1(id1){
    const updateList1 = player1.map(item1 => {
     if (item1.id1 === id1) {
       return {...item1, ace1: item1.ace1 - 1}
     }
     return item1;
    })
    
    //update the state of the new player
    setPlayer1(updateList1)
  }

  //team2: add kill
  function incrementKill1(id1){
    const updateList1 = player1.map(item1 => {
     if (item1.id1=== id1) {
       return {...item1, kill1: item1.kill1 + 1}
     }
     return item1
    })
    setPlayer1(updateList1)
  }
  //team2 subtract kill
  function decrementKill1(id1){
    const updateList1 = player1.map(item1 => {
     if (item1.id1 === id1) {
       return {...item1, kill1: item1.kill1 - 1}
     }
     return item1;
    })
    
    //update the state of the new player
    setPlayer1(updateList1)
  
  }

  function removePlayer1(id1){
    const playerL1 = player1.filter((item)=> item.id1 !== id1);
    setPlayer1(playerL1)
  }
  //////////////////////////////////////////////////



  return (
    <div className="App">

    <div className='teams'>
    <Alert variant="primary" >

    <Navbar class="navbar navabar-expand-lg">
        <Container>
          <Navbar.Brand href="#home" class="navbar_text">
            <img
              alt=""
              src="logo.png"
              width="20"
              height="20"
              className="d-inline-block align-top"
            /> {' '}
            Augustana Intramural 
          </Navbar.Brand>
      </Container>
    </Navbar>

    <div className='team'>
      <div className='team1' >
        <input placeholder = "enter name" value={name} onChange={(e)=> (setName(e.target.value))}/>
        <input  placeholder = "enter id" value = {id} onChange={(e)=> (setNewId(e.target.value))} />
        <button onClick = {(e) => (addPlayer(name,id))}>Add player</button>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ID#</th>
              <th>Full Name</th>
              <th>Ace</th>
              <th>Kill</th>
            </tr>
          </thead>
          <tbody>
          {player.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button  onClick = {(e) => (decrementAce(item.id))}>-</button>
                {item.ace}
                <button  onClick = {(e) => (incrementAce(item.id))}>+</button>
              </td>
              <td>
                <button  onClick = {(e) => (decrementKill(item.id))}>-</button>
                {item.kill}
                <button  onClick = {(e) => (incrementKill(item.id))}>+</button>
              </td>
            </tr>
          ))}
          </tbody>
      </Table>
      </div>
    </div>
     

      <div className='team'>
        <div className='team2' >
            <input placeholder = "enter name" value={name1} onChange={(e)=> (setName1(e.target.value))}/>
            <input  placeholder = "enter id" value = {id1} onChange={(e)=> (setNewId1(e.target.value))}/>
            <button onClick = {(e) => (addPlayer1(name1,id1))}>Add player</button> 

            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID#</th>
                  <th>Full Name</th>
                  <th>Ace</th>
                  <th>Kill</th>
                </tr>
              </thead>
              <tbody>
              {player1.map((item) => (
                <tr key={item.id1}>
                  <td>{item.id1}</td>
                  <td>{item.name1}</td>
                  <td>
                    <button  onClick = {(e) => (decrementAce1(item.id1))}>-</button>
                    {item.ace1}
                    <button  onClick = {(e) => (incrementAce1(item.id1))}>+</button>
                  </td>
                  <td>
                    <button  onClick = {(e) => (decrementKill1(item.id1))}>-</button>
                    {item.kill1}
                    <button  onClick = {(e) => (incrementKill1(item.id1))}>+</button>
                  </td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        </div>
      
        <div className='export'>
          <button>export</button>
        </div>
    </Alert>
    </div>
    
    </div>
  );
}


export default App;
