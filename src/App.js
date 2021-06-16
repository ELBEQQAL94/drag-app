import { useState } from "react";
import Box from "./Box";

const BOX = [
  {
    content: "item 1",
  },
  {
    content: "item 2",
  },
  {
    content: "item 3",
  },
];

const App = () => {
  const [isDrag, setIsDrag] = useState({
    state: false,
    id: null
  });
  const handleDragStart = (e) => {
    console.log('clssName: ', e.target.className)
    e.target.className += " holder"
    setTimeout(() => e.target.className += " invisible",0)
    // TODO: add classname to hidde hold box
    console.log('drag start', e.target.id);
    setIsDrag({
      state: true,
      id: e.target.id
    });
  };

  const handleDragEnd = (e) => {
    console.log('drag end');
    e.target.className = "box block";
    setIsDrag({
      state: false,
      id: null
    });
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      {BOX.map((item, index) => (
        <Box 
          content={item.content} 
          key={index} 
          handleDragStart={handleDragStart} 
          handleDragOver={handleDragOver} 
          handleDragEnd={handleDragEnd} 
          isDrag={isDrag}
          id={index}
        />
      ))}
    </div>
  );
};

export default App;
