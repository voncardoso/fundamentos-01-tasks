import express from 'express';
import { PrismaClient }  from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Página de tarefas');
});

router.get('/:id', (req, res) => {
    res.send(`Tarefa com ID: ${req.params.id}`);
});

router.post('/', async (req, res) => {
    const { title, description} = req.body;

    try{
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
            }
        })
        res.status(201).json(newTask)
    } catch (error) {
        res.status(500).send('Erro ao criar task');
    }
});

export default router;