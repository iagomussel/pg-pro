import { Hono } from 'hono'
import database from './config/database'

console.log(database)

import members from './routes/members'

const app = new Hono()

app.route('/members', members)

app.get('/', (c) => c.json({ message: 'Everything looks good', ok: true }, 200))
app.notFound((c) => c.json({ message: 'Not Found', ok: false }, 404))

export default app
