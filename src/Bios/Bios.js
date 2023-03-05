import React, { useEffect, useState } from 'react';
/* 추가 */
import '../styles/Bios.scss'
/* import {Link} from 'react-router-dom' */
import Typing from './Typing'


const Bios = () => {
    /* window page 이동 */
    /* const windowBtnfn=()=>{
        window.location.href='/window'
    }
    const completionWord = 'Auto typing'
    const [typing, setTyping] = useState('');
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const typingInterval = setInterval(()=>{
            setTyping((prevTitlevalue)=>{
                let result = prevTitlevalue ? prevTitlevalue + completionWord[count] : completionWord[0];
                setCount(count + 1);
                if (count >= completionWord.length){
                    setCount(0);
                    setTyping('');
                }
                
            return result;
            })
        });
    },300); */
    /* const [text, setText] = React.useState(''); */
    let onChangeInputStart=(e)=>{
        /* setText(e.target.value) */
        /* console.log(value); */
        let ch='Enter'
        if (e.key === ch) {
            
            console.log('Enter 확인')
            window.location.href='/window'
          }
    }

    return (
        <div id="bios-wrap">
            {/* <h3>Bios page</h3> */}
            <br/><br/>
            <div className='img-logo-wrap' style={{display:'flex', justifyContent:'space-between', marginTop:'-30px', padding:'0 35px'}}>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/a-logo.png`} style={{width:'48px',height:'90px', marginLeft:'10px', marginTop:'25px'}} alt="logo" />
                    <span className='left-title' style={{color:'#fff'}}>Front-end Portfolio<i>Hello World</i></span>
                </div>
                <pre className='pre-wrap name-logo-title' contentEditable={false} style={{color:'tomato'/* ,textAlign:'center' */}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;____ _______ _______ ________ ________ ___  ___ ___  ___ ________ _______ ___   __<br/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/   //  _   //  _   //  _____//  _____//  / /  //  / /  //  _____//  _   //  /  / /<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/   //  //  //  //  //  /____ /  /____ /  /_/  //  /_/  //  /____ /  //  //   \ / /<br/> 
                    ____ /   //  //  //  //  //____   //  _____//   _   / \    _ //  _____//  //  //  /\   /<br/> 
                    /  //   //  //  //  //  //_____/ //  /____ /  / /  /  /   /  /  /____ /  //  //  / /  /<br/> 
                    \______//______//______//_______//_______//__/ /__/  /__ /  /_______//______//__/ /__/<br/>
                    &nbsp;                                                                             v. 0.10.11
                </pre>

                <img src={`${process.env.PUBLIC_URL}/img/epa-logo.png`} style={{width:'300px',height:'180px', marginTop:'0px'}} alt="logo" />
            </div>
            
            <div className='bios-content'>
                <Typing/>
            </div>
            <div className='window-terminal' style={{textAlign:'left', paddingLeft:'100px'}}>
                <span style={{color:'#fff', fontSize:'19px'}}>&gt;</span>
                <input 
                    style={{
                        outline:'none', 
                        border:'none', 
                        background:'#000', 
                        color:'#fff', 
                        width:'500px', 
                        height:'100px', 
                        fontSize:'19px'
                        }} 
                    className='window-input' 
                    type="text"
                    onKeyUp={onChangeInputStart}
                />
            </div>

            
            {/* <button className='window-btn' onClick={windowBtnfn}>Window</button> */}

            {/* <Link className='start-btn' to="/window">Window</Link> */}
        </div>
    );
};


export default Bios;