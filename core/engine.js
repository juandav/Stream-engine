import http from 'http'
import Signalign from './signalign'

class Engine {
  /**
   * La estancia crea un servidor http
   * @param {Object} options { port, host } 
   */
  constructor ({ port, host }) {
    try {
      this.server = http.createServer().listen(port, host)
    } catch (error) {
      console.error(`Engine ${error.message}`)
    }
  }
  start () {
    try {
      const signalign = new Signalign(this.server)
      signalign.init()
    } catch (error) {
      console.log(`init ${error.message}`)
    }
  }
}

export default Engine