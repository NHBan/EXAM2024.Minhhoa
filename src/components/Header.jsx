function Header({onOpen})
{
    return(
        <>
         <header className="container d-flex space-between mg-2">
        <p className="text-title">Task list</p>
        <button className="btn bg-primary color-light" onClick={onOpen}>
            Add Task</button>
    </header>
        </>
    )
}
export default Header