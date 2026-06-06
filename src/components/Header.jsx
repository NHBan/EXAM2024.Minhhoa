function Header()
{
    return(
        <>
         <header className="container d-flex space-between mg-2">
        <p className="text-title">Task list</p>
        <button className="btn bg-primary color-light" >
            Add Task</button>
    </header>
        </>
    )
}
export default Header