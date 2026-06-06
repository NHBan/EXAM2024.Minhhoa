import TaskItem from "./TaskItem"
function TaskList()
{
    return(
        <>
             <section class="container d-flex flex-column gap-10">
                <TaskItem/>
                <TaskItem/>
                <TaskItem/>

             </section>
        </>
    )
}
export default TaskList