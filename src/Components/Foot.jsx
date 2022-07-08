import {Store} from "./store"
import { Box } from "./Box"
const Foot = () => {

    return(
        <div>
            <section className="head">
                <h3>Task</h3>
            </section>
            <section>
                {store && stores.map((ele, index) => {
                    return <Box
                    key={ele.id}
                    name={ele.name}
                    label={ele.label}
                    author={ele.author}/>
                })}
            </section>
        </div>
    )
}
export {Foot}
