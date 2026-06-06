import TaskItem from "./TaskItem"
function TaskList({taskList})
{
    return(
        <>
             <section class="container d-flex flex-column gap-10">
                {
                    taskList.map(task=>
                        <TaskItem
                        key={task.id}
                        task={task}
                        />
                    )
                }

             </section>
        </>
    )
}
export default TaskList