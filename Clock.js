// Initial example. Replaced by more encapsulated version below
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('clock'));
//   }
  
//   setInterval(tick, 1000);

  class Clock extends React.Component {
      constructor(props){
          super(props);
          this.state = {date: new Date()};
      }

      componentDidMount() {
          this.timerID = setInterval(
              () => this.tick(),
              1000
          );
      }
      componentWillUnmount(){
          clearInterval(this.timerID);
      }
      render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
    }
  }

  function tick() {
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);