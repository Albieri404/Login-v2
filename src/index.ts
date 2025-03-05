import express from  "express"
import cors from "cors"
import authRouter from "./routers/authRouter"

const port = Number(process.env.PORT) || 4000 
const app = express()

app.use(cors());

app.use('/api/auth', authRouter)

app.listen(port, () => {
  console.log(`Server runnig on port: ${port}`)
})