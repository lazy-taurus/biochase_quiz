import express from 'express'
import {submission} from '../controllers/submission.js'

const router = express.Router()

router.post('/submit',submission)

export default router;