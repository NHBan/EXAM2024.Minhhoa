function TaskForm()
{
    return(
        <>
        <div className="modal-overlay">
        <div className="modal-content d-flex flex-column gap-15">
            <p className="text-title">Add task</p>
            <div className="d-flex flex-column gap-10">
                <p className="label">Task</p>
                <input type="text" className="input" placeholder="Type your task here..."/>
            </div>
            <div className="d-flex flex-column gap-10">
                <p className="label">Priority</p>
                <div className="d-flex gap-10">
                    <button className="btn btn-high">High</button>
                    <button className="btn btn-medium">Medium</button>
                    <button className="btn btn-low">Low</button>
                </div>
                <div className="d-flex flex-end">
                    <button className="btn bg-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default TaskForm