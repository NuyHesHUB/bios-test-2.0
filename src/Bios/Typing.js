import React, {useEffect, useState/* , useMemo */} from 'react';
import '../styles/Typing.css'

const Typing = () => {
  const txt = 'Hello World This is my portfolio space.\n\nBIOS(C)2023 JooSeHyeon OS, Inc\nASUS P4C800 ACPI BIOS Revision 1002\nCPU : Intel(R) Pentium(R) 4 CPU 2.80GHz \nSpeed : 2.82 GHz \n \nPress DEL to run Setup \nPress <F8> for BBS POPUP \nDDR Frequency 400 Mhz, Dual-Channel, Liner Mode \nChecking NVRAM.. \n \n512MB OK \nNuyhes Portfolio Setup OK......... \n■■■■■■■■■■■ 100% \n\n안녕하세요\n프론트엔드 개발자 \n주세현 입니다. \n주세현 이력서 Memory Checking ........\n열람하시겠습니까? (Y/N)  \n';
  
/*   $: > Booting systems...
$: > Total memory found: 256kb
$: > Scanning for bootable media    ■■■■■■■■■■■ 100%
$: > No media found. Booting from network address 3E:40:9C:75
$: > Loading BIOS 2.3               ■■■■■■■■■■■ 100%
$: > Reticulating splines           ■■■■■■■■■■■ 100%
$: > Booting console                ■■■■■■■■■■■ 100%
$:
$: > Welcome to the retro console version 0.1a
$:
$: > Hello Designer023. How can I help you today?
$: I can has matrix?
$: > buffering matrix... 20%
$: > buffering matrix... 66%
$: > buffering matrix... 100%
$: > So, would you like a red or blue pill? */
  
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);
  
  useEffect(() => {
    let a=true;
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
    }, 1);
    if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
        clearInterval(interval);// 문자열 체크를 통해 setInterval을 해제합니다
        a=false;
        console.log(a);
        if(a===false){
          /* 타이핑이 다 되면 useRef를 실행해서 input에 focus가 되어야함.. 해결 못함 */
        }
    }
    return () => {clearInterval(interval)}; // 언마운트시 setInterval을 해제합니다
})
  
  return (
  	<span className="text">{ Text }</span>
  )
}

export default Typing;