import CSS from 'csstype';

const Theme  = {
  background:'black',
  primary:'#00ff00',
  secondary:'#009900',
  font:'source-code-pro, Menlo, Monaco, Consolas,monospace'
}

const CssBase : CSS.Properties = {
  backgroundColor: Theme.background,
  color: Theme.primary,
  fontFamily: Theme.font,
}

export {
  Theme,
  CssBase
} 
