import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.json({ data: [] }, 200))
app.get('/:id', (c) => c.json({ data: {} }, 200))
app.post('/', (c) => c.json({ data: [] }, 200))
app.put('/:id', (c) => c.json({ data: [] }, 200))
app.delete('/:id', (c) => c.json({ data: [] }, 200))

export default app