import {Outlet} from "react-router-dom"
import Navigation from "../../component/navigation/Navigation"
import Gallery from "../../component/gallery/Gallery"
const Shared = () =>{
    return (
        <>
        <Navigation/>
        <Outlet/>
        </>
    )
}

export default Shared