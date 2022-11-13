import { EConnectionActions } from './enums'

export interface TSymbolItem {
  symbol: string
  ts: string
  bid: string
  ask: string
  mid: string
}

export type TConnectionActionTypes =
  | EConnectionActions.OPEN
  | EConnectionActions.CLOSE
