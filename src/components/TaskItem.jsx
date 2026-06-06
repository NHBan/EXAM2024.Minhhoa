function TaskItem()
{
    return(
        <>
         <article className="d-flex space-between task-item">
            <div className="task-col">
                <p className="label">Task</p>
                <p>Cong viec</p>
            </div>
            <div className="task-col">
                <p className="label">Priority</p>
                <p>Muc do</p>
            </div>
            <div className="task-col justify-center">
                <p className="label">Todo</p>
            </div>
            <div className="d-flex">
                <div><button className="btn btn-primary color-light">Them</button></div>
                <div><button className="btn bg-high color-light">Xoa</button></div>
            </div>
        </article>
        </>
    )
}
export default TaskItem