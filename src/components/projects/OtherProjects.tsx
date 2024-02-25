import './OtherProjects.css'
import { Grid } from '../../assets/png';

const OtherProjects = () => {
    return (
        <div className='other-container'>
            <div className='areas-row'>
                <h3>3D</h3>
                <h3>PHOTOGRAPHY</h3>
                <h3>GRAPHIC</h3>
            </div>
            <div className='img-grid'>
                <img src={Grid}/>
            </div>
            <div className='main-row'>
                <h1>DESIGN</h1>
            </div>
        </div>
    );
}

export default OtherProjects;