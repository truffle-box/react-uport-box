import { Connect } from 'uport-connect'

export let uport = new Connect('TruffleBox')
export const web3 = uport.getWeb3()
