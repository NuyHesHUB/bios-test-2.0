import React, {useEffect, useState/* , useMemo */} from 'react';
import '../styles/Typing.css'

const Typing = () => {
  const txt = 'Hello World This is my portfolio space. \n \n BIOS(C)2023 JooSeHyeon OS, Inc \n ASUS P4C800 ACPI BIOS Revision 1002 \n CPU : Intel(R) Pentium(R) 4 CPU 2.80GHz \n Speed : 2.82 GHz \n \n Press DEL to run Setup \n Press <F8> for BBS POPUP \n DDR Frequency 400 Mhz, Dual-Channel, Liner Mode \n Checking NVRAM.. \n \n 512MB OK \n Nuyhes Portfolio Setup OK......... \n  ■■■■■■■■■■■ 100% \n \n \n 안녕하세요 \n 프론트엔드 개발자 \n 주세현 입니다. \n 주세현 이력서 Memory Checking ........ \n \n \n \n \n 열람하시겠습니까? (Y/N)  \n ';
  
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
    const interval = setInterval(() => {
        setText(Text + txt[Count]); // 이전 set한 문자 + 다음 문자
        setCount(Count + 1); // 개수 만큼 체크 
    }, 1);
    if(Count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
        clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
})
  
  return (
  	<span className="text" >{ Text }</span>
  )
}

export default Typing;