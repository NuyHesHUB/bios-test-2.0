import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import '../styles/Window.css'
import startup from '../assets/sounds/startup.mp3'

import TaskBar from '../components/TaskBar/TaskBar';

function Window({ aboutVisible, notepadVisible, shutDown, showModal }){
    const [audio] = useState(new Audio(startup))

    useEffect(()=>{
        window.addEventListener('contextmenu',contextDisable);
        audio.play();
        return()=>{
            window.removeEventListener('contextmenu', contextDisable);
        }
        // eslint-disable-next-line
    },[]);
    function contextDisable(e){
        e.preventDefault();
    }

    /* const aboutVisible = aboutVisible ? <About/> : null;
    const notepadVisible = notepadVisible ? <Notepad/> : null;
    const shutDownDisplay = shutDown ? <ShutDown/> : null;
    const modalDisplay = showModal ? <Modal/> : null; */

    return(
        <div className='Window'>
            {/* <Icons /> */}
            {/* {aboutDisplay}
            {notepadDisplay}
            {shutDownDisplay}
            {modalDisplay} */}
            <TaskBar />
        </div>
    )

    
}
const mapStateToProps = (state) => {
    return {
      aboutVisible: state.about.show,
      notepadVisible: state.notepad.show,
      shutDown: state.shutDown,
      showModal: state.showModal
    }
  }
  
export default connect(mapStateToProps)(Window);
/* export default Window; */