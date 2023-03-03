import React from 'react';
import './Window.css'

const Window = () => {
    return (
        <div id="window-wrap">
            {/* <div className='window-desktop'> */}
                <div ondblClick='' className='desktop-icon'>icon1</div>
                <div className='desktop-icon'>icon2</div>
            {/* </div> */}
            <p>Window page 입니다.</p>
            <div className='window-dock'>
                <button className='dock-start-btn'>start</button>
                <div className='dock-time'>PM 5:39</div>
            </div>
        </div>
    );
};

export default Window;