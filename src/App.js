import React from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const topleft = ()=>{
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
  }
  const topcenter =()=>{
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
  }
  const bottomcenter = ()=>{
    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  const bottomleft = ()=>{
    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });
  }
  const topright=()=>{
    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'foo-bar'
    });
  }
  const bottomright=()=>{
    toast("Custom Style Notification with css class!", {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar',
    });
  }
  const mystyle = {
    color: "white",
    backgroundColor: "#2b76be",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ff000000",
    margin: "5px",
    cursor: "pointer"
  };
  return (
    <div className="App">
      <h2>React Toastify</h2>
      <button onClick={bottomleft} style={mystyle}>Bottom Left</button>
      <button onClick={topright} style={mystyle}>Top Right</button>
      <button onClick={topleft} style={mystyle}>Top Left</button>
      <button onClick={bottomright} style={mystyle}>Bottom Right</button>
      <button onClick={bottomcenter} style={mystyle}>Bottom Center</button>
      <button onClick={topcenter} style={mystyle}>Top Center</button>
      <ToastContainer />
    </div>
  );
}
export default App;
