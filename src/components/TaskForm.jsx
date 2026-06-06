import { useState } from "react"
function TaskForm({ isOpen, onClose, onAdd }) {

    const [taskName, setTaskName] = useState("")
    const [error, setError] = useState({})
    const [priority, setPriority] = useState("Low")
    function handleAdd() {
        const newError = {}
        if (taskName.trim().length > 100) {
            newError.text = "Khong duoc nhap qua 100 ki tu"
        }
        if (taskName.trim() === "")
            newError.text = "Khong duoc bo trong"
        setError(newError)
        if (Object.keys(newError).length > 0) {
            return
        }
        const newTask = {
            id: Date.now(),
            name: taskName.trim(),
            priority: priority
        }
        onAdd(newTask)
        setTaskName("")
        onClose()

    }
    return (
        <>
            <div className={`modal-overlay ${isOpen ? "modal-start" : ""}`}>
                <div className="modal-content d-flex flex-column gap-15">
                    <p className="text-title" >Add task</p>
                    <div className="d-flex flex-column gap-10">
                        <p className="label">Task</p>
                        <input type="text" className="input" placeholder="Type your task here..."
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                        {error.text && (<p className="text-error">{error.text}</p>)}
                    </div>
                    <div className="d-flex flex-column gap-10">
                        <p className="label">Priority</p>
                        <div className="d-flex gap-10">
                            <button className="btn btn-high"
                                onClick={() => setPriority("High")}
                            >High</button>
                            <button className="btn btn-medium"
                                onClick={() => setPriority("Medium")}
                            >Medium</button>
                            <button className="btn btn-low"
                                onClick={() => setPriority("Low")}
                            >Low</button>
                        </div>
                        <div className="d-flex flex-end">
                            <button className="btn bg-primary" onClick={handleAdd}>Add</button>
                        </div>
                        <button className="btn btn-close" onClick={onClose}>X</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskForm