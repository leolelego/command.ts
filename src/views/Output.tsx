import { useEffect, useState } from "react"

export default function Output(props: { text: string, onChange: () => void }) {
  const [live, setLive] = useState([] as JSX.Element[])
  const [ended, setEnded] = useState(false)

  const [count, setCount] = useState(0)

  const sleep = (milliseconds:number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  useEffect(() => {
    if (count-1 < props.text.length){
      let speed = Math.floor(Math.random() * (90 - 30 + 1) + 30)
      sleep(speed).then(() => {
        setCount(count + 1)
        var log = props.text.slice(0, count)
         log = log.replace("\t", "    ")
         const lines = log.split('\n').map(str => <div key={str} style={{whiteSpace: 'break-spaces',fontSize:'1em',paddingTop:'0.3em'}}>{str}</div>)
        setLive(lines)
      })
    } else if(!ended) {
      props.onChange()
      setEnded(true)
    } else {
      console.log("Redraw")
    }


  }, [count,props.text,props,ended]);
  return (
    <>
    {live}
    </>
  );
}
