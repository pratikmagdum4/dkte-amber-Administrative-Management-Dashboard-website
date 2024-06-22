import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const links = [
    { label: 'Home', url: '/' },
    { label: 'Login', url: '/login' },
    { label: 'Register', url: '/' },
    { label: 'Contact', url: '/' },
   ];
function Home()
{
    return (
        <>
        
        <div>
            <Navbar links={links}/>
            <h1>
                home
            </h1>
            
        </div>
        <Footer/>
        </>
    )
}
export default Home;