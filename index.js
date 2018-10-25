require("@babel/register")
const engine = require("./core/engine").default

;(() => {
  const instance = new engine({ port: 3000, host: '0.0.0.0' })
  instance.start()
})()