import express from 'express'
import { getAllProducts, addNewProduct } from '../controllers/controllers.api.products'

const app = express()
const router = express.Router()

router.get('/', getAllProducts)
router.post('/', addNewProduct)


export default router
