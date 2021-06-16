
import "./Box.css";

const Box = ({ content, handleDragStart, handleDragOver, handleDragEnd, isDrag, id }) => {
    return (
        <div 
            id={id}
            className="box" 
            draggable 
            onDragStart={handleDragStart} 
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
        >
            {content}
        </div>
    )
}

export default Box;
