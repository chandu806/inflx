const Box = ({name, title, author}) => {
    return (
    <div className="box">
        
        <section>
            <input type="checkbox" />
        </section>
        <section>
            <p className="name">{name} 
            <span className="title"> {title}</span>
            </p>
            <p>{author}</p>
        </section>
        

    </div>
    )
}
export {Box}
