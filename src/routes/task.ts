import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Página de tarefas');
});

router.get('/:id', (req, res) => {
    res.send(`Tarefa com ID: ${req.params.id}`);
});

export default router;