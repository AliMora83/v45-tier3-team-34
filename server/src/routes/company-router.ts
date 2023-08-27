import express from 'express'
import { update_company_detail_info } from '../controller/company-controllers/Company-details-controller'

const companyRouter = express.Router()

companyRouter.route('/info/:user_id').patch(update_company_detail_info)

export default companyRouter
