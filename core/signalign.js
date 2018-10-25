import socketIO from 'socket.io'

class Signaling {
  /**
   * instance signalign
   * @param {Object} server adapter for http server
   */
  constructor (server) {
    try {
      this.io = socketIO.listen(server)
    } catch (error) {
      console.error(`Signalign ${error.message}`)
    }
  }
  init () {
    try {
      console.info(`server on`)
      this.io.sockets.on('connection', function (client) {
        console.info('new connection' + client.id)
        
        client.on('offer', function (details) {
          client.broadcast.emit('offer', details)
          console.info('offer: ' + JSON.stringify(details))
        })
        client.on('answer', function (details) {
          client.broadcast.emit('answer', details)
          console.info('answer: ' + JSON.stringify(details))
        })
        client.on('candidate', function (details) {
          client.broadcast.emit('candidate', details)
          console.info('candidate: ' + JSON.stringify(details))
        })
      
        client.broadcast.emit('createoffer', {})
      })
    } catch (error) {
      console.error(`init ${error.message}`)
    }
  }
}

export default Signaling