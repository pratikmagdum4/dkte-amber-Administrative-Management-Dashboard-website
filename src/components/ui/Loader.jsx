import Navbar from '../../pages/navbar/Navbar';
import '../styles/loading.css';

const Loading = ({links}) =>{

    return (
        <>
            <Navbar links ={links}  />
        <div className='loader'> 
            Loading
            <span></span>
        </div>
        </>
    )
}

export default Loading;