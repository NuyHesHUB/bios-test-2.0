import React, { useEffect, useState, useRef } from 'react';
import '../styles/Bios.scss'
import Typing from './Typing'


const Bios = () => {
    let onChangeInputStart=(e)=>{
        /* setText(e.target.value) */
        /* console.log(value); */
        let ch='Enter'
        if (e.key === ch) {
            console.log('Enter 확인')
            window.location.href='/window'
          }
          
    }
    const toInputUppercase=(e)=>{
        e.target.value = ("" + e.target.value).toUpperCase();
    };
    const toInputFocus=useRef(null);
    useEffect(() => {
        toInputFocus.current.focus();
      },[]);

      
    /* function startFS(element){
        if(element.requestFullScreen)
        {return element.requestFullScreen();}
        else if(element.webkitRequestFullScreen)
        {return element.webkitRequestFullScreen();}
        else if(element.mozRequestFullScreen)
        {return element.mozRequestFullScreen();}
        else if(element.msRequestFullscreen)
        {return element.msRequestFullscreen();}
    }

    useEffect(()=>{
        window.addEventListener('contextmenu',startFS);
    },[]); */


    return (
        <div id="bios-wrap">
            <br/><br/>
            <div className='img-logo-wrap' style={{display:'flex', justifyContent:'space-between', marginTop:'-30px', padding:'0 150px', height:'120px'}}>
                <div>
                    <img src={`${process.env.PUBLIC_URL}/img/a-logo.png`} style={{width:'42px',height:'75px', marginLeft:'10px', marginTop:'25px'}} alt="logo" />
                    <span className='left-title' style={{}}>Front-end Portfolio<i>Hello World</i></span>
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
                <img src={`${process.env.PUBLIC_URL}/img/epa-logo.png`} style={{width:'300px',height:'213px', marginTop:'10px'}} alt="logo" />
            </div>
            <div className='bios-content'>
                <Typing/>
            </div>
            <div className='window-terminal' style={{textAlign:'left', paddingLeft:'100px'}}>
                <span style={{color:'#999', fontSize:'22px'}}>&gt;</span>
                <input 
                    style={{
                        outline:'none', 
                        border:'none', 
                        background:'#000', 
                        color:'#999', 
                        width:'500px', 
                        height:'100px', 
                        fontSize:'22px'
                        }} 
                    id='windowInput'
                    className='window-input' 
                    type="text/upercase"
                    onInput={toInputUppercase}
                    onKeyUp={onChangeInputStart}
                    ref={toInputFocus} /* 타이핑이 다 되면 useRef를 실행해서 input에 focus가 되어야함.. 해결 못함 **store에서 show false 등을 이용해서 활용하면 될듯*/
                />
            </div>
            {/* <button className='window-btn' onClick={windowBtnfn}>Window</button> */}
            {/* <Link className='start-btn' to="/window">Window</Link> */}
        </div>
    );
};


export default Bios;