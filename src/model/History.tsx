import { v4 as uuidv4 } from 'uuid';
export enum HistoryEnum {
  Command,
  Output
}
export class  History {
  type: HistoryEnum
  text: string
  uuid = uuidv4()
  constructor(public ty: HistoryEnum, public te: string) {
    this.type = ty
    this.text = te
  }
}