import express from 'express';
import { PrismaClient }  from '@prisma/client'

const prisma = new PrismaClient();
const router = express.Router();
router.get('/', async (req, res) => {

    const users = await prisma.user.findMany();

    res.status(200).json(users);
});

router.post('/', async (req, res) => {
    const { name } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: { name }
        });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao criar usuário');
    }
});


export  default router;