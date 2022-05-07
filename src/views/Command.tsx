import {  useState } from 'react'
import CSS from 'csstype'
import {Theme, CssBase} from '../assets/Theme'

const inputStyle : CSS.Properties = {
  color: Theme.primary,
  border:'none',
  flex: '1',
  outline: 'none',
  fontSize: '1em',
  ...CssBase,
  padding: '0',
  margin:'0',
  //backgroundColor: 'pink',

}
export default function CommandView(props:{onChange:(command:string) => void}) {

  const [command, setCommand] = useState("")
  const [downPressed, setDownPressed] = useState(false)
  function keyDownHandler(evt: any) {
    if (evt.key === "Enter") {
      setDownPressed(true)
      props.onChange(command)
    }
  }
  return (
    <div style={{display:'flex',flexDirection:'row',color:'white',padding:'0.5em 0 0.5em 0',flexWrap: 'nowrap'}}>
      <div style={{flexDirection:'row'}}>
        <span>leo@</span>
        <span style={{color:Theme.secondary}}>linux</span>
        <span style={{fontWeight:'bolder'}}>{"~: "}</span>
      </div>
   
    {downPressed ? 
        <span style={inputStyle}>{command}</span> : 
        <input style={inputStyle} type="text" autoFocus onKeyPress={keyDownHandler} onChange={e => setCommand(e.target.value)}/>
      }
    </div>
  )
}
