import CommandView from './views/Command';
import OutputView from './views/Output';
import CSS from 'csstype';
import { useEffect, useState } from 'react';
import {History,HistoryEnum} from './model/History';
const style : CSS.Properties = {
  padding: '1.3em',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'black',
  color:'#00ff00',
  fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace'
}
function App() {
  
  const [history, setHistory] = useState<Array<History>>([])
  useEffect(() => {
    setHistory([new History(HistoryEnum.Output, 'Wake Up...\nThe Matrix has you...')])
  }, [])
  return (
    <div style={style}>

      {
        history.map(i =>  
          (
         i.type === HistoryEnum.Command ?
              <CommandView key={i.uuid} onChange={(command) =>  setHistory([...history,new History(HistoryEnum.Output, `${command}: command not found\nTry on of these:\n\n\t - study: get my school profile\n\n - jobs: get my jobs history\n\n - jobs: get my jobs history`)])}/> :
              <OutputView key={i.uuid} text={i.text} onChange={() => setHistory([...history,new History(HistoryEnum.Command, '')])}/>
          )
        )  

      }

    </div>
  );
}

export default App;
