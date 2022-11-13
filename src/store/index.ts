import { createStore } from 'vuex'
import { EConnectionActions, ERequestPayload } from '../types/enums'
import { TSymbolItem } from '../types/types'

const PATH =
  import.meta.env.VITE_ENV_PATH || 'wss://marketdata.tradermade.com/feedadv'

export default createStore({
  state: {
    dataTable: [] as Array<TSymbolItem>,
    ws: null as WebSocket | null,
  },
  getters: {
    getDataTable(state) {
      return [...state.dataTable].sort((a: TSymbolItem, b: TSymbolItem) =>
        a.symbol > b.symbol ? 1 : -1,
      )
    },
  },
  mutations: {
    SET_WS(state, payload: WebSocket) {
      state.ws = payload
    },
    CLEAR_WS(state) {
      state.ws = null
    },
    SET_DATA(state, payload: Array<TSymbolItem>) {
      state.dataTable = [...payload]
    },
  },
  actions: {
    connection({ commit, state }, actionType) {
      const filteredSymbolList: Array<TSymbolItem> = [...state.dataTable]

      if (actionType === EConnectionActions.OPEN) {
        if (state.ws) return
        if (!state.ws) {
          const socket: WebSocket = new WebSocket(PATH)
          commit('SET_WS', socket)

          socket.onopen = function (event) {
            socket.send(
              JSON.stringify({
                userKey: ERequestPayload.USER_KEY,
                symbol: ERequestPayload.SYMBOL,
              }),
            )
            console.log('CONNECTION OPEN')
          }
          socket.onmessage = function (event) {
            if (event.data === 'Connected') return

            const parsedSymbol: TSymbolItem = JSON.parse(event?.data)
            const existedSymbolIndex = filteredSymbolList.findIndex(
              (el) => el.symbol === parsedSymbol.symbol,
            )
            const existedSymbol = filteredSymbolList[existedSymbolIndex]
            if (existedSymbol) {
              existedSymbol.ts = parsedSymbol.ts
              existedSymbol.bid = parsedSymbol.bid
              existedSymbol.ask = parsedSymbol.ask
              existedSymbol.mid = parsedSymbol.mid
            } else {
              if (!parsedSymbol) return
              filteredSymbolList.push(parsedSymbol)
            }
            commit('SET_DATA', filteredSymbolList)
          }
        }
      }
      if (actionType === EConnectionActions.CLOSE) {
        if (!state.ws) return
        state.ws.onclose = function (event) {
          commit('CLEAR_WS')
          console.log('CONNECTION CLOSED')
        }
        state.ws.close(1000, 'Work complete')
      }
    },
  },
})
