import TaskItem from "./TaskItem"
function TaskList({taskList,onDelete})
{
    return(
        <>
             <section class="container d-flex flex-column gap-10">
                {
                    taskList.map(task=>
                        <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        />
                    )
                }

             </section>
        </>
    )
}
export default TaskList