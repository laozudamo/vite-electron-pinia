import transTime from './dealTime.js'

export function RegisterPlugin(app) {
  app.use(transTime)
}