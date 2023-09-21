import background from './assets/snake.jpg'
function App() {

  const styles={
    backgroundImage:`url(${background})`,
    height:'100vh',
    backgroundSize: '100vw 100vh',
    backgroundRepeat: 'no-repeat',
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }


  return (
    <>
     <div style={styles}>
      <h1>Snake Game</h1>
      <div className="board">
        
      </div>
     </div>
    </>
  )
}

export default App
