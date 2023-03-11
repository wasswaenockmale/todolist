const Item = (props) =>{
    return(
        <div>
            {props.todolist.map(element => {
                <div className="todo-feature">
                    <h3 className="to-title">{element.title}</h3>
                    <p className="to-text">{element.text}</p>
                    <p className="fade-time">{element.time}</p>
                </div>
            })}
        </div>
    )
};

export default Item;