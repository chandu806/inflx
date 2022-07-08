
const Navbar = () =>{
    return(
        <div>
            <section className="taskboard">
                <section className='logo' style={{color:green'}}>


                </section>
                <section className='text'>
                    <p className='name'>John Wick</p>
                    <p>Developer</p>
                </section>
            </section>

           

            <section className='text'>
                <section className='1' >
                    <section>
                    
                    </section>
                    <section>
                        <h3>Analytics Dashboard</h3>
                        <p className='para'>A single place to view all the updates
                            from the dashboard and quest from it.
                        </p>
                    </section>
                </section>
                <div className='btns'>
                    <div className='btn-1'>
                        <AiFillStar className='star'/>
                    </div>
                    <div className='btn-2'>
                        <BsPlus className='plus'/>
                        <span>Create New Item</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export {Navbar}
