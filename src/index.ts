import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/greeting', (req, res) => {
  const now = new Date()
  const message = {
    message: 'Saludos! Mi nombre es Jesus Cervantes',
    info: `El dia de hoy es ${now.toLocaleString('es-MX', {
      timeZone: 'America/Mexico_City'
    })}`
  }
  res.json(message)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

export default app
