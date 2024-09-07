import carrosController from './controller/carrosController.js'

export default function adicionarRotas(servidor) {
  servidor.use(carrosController)
}