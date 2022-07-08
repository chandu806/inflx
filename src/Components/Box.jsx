const Box = ({name, label, author}) => {
    return (
    <div className="box">
        
        <section>
            <input type="checkbox" />
        </section>
        <section>
            <p className="name">{name} 
            <span className="label"> {label}</span>
            </p>
            <p>{author}</p>
        </section>
        

    </div>
    )
}
export {Box}
