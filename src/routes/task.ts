import express from 'express';
import { PrismaClient }  from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();

router.get('/', async (req, res) => {
    const tasks = await prisma.task.findMany();

    res.status(200).json(tasks);
});

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id)

    try{
        const task = await prisma.task.findUnique({
            where: {
                id: id
            }
        })
        res.status(200).json(task)
    }catch (error) {
        res.status(500).send('Erro ao buscar task');
    }

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

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id)
    const { title, description} = req.body;

    try{
        const task = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                title,
                description,
                updated_at: new Date()
            }
        })
        res.status(200).json(task)
    }catch (error) {
        res.status(500).send('Erro ao atualizar task');
    }
})

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id)
    try {
     const deleteTask = await prisma.task.delete({
         where: {
             id: id
         }
     })
    }catch (error) {
        res.status(500).send('Erro ao deletar task');
    }

})

router.patch('/:id', async (req, res) => {
    const id = Number(req.params.id)

    try{
        const task = await prisma.task.update({
            where: {
                id: id
            },
            data: {
                completed_at: true
            }
        })

        res.status(201).json(task)
    }catch (error) {
        res.status(500).send('Erro ao atualizar task');
    }
})
export default router;