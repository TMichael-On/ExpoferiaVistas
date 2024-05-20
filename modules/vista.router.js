import { Router } from "express";

const router = Router();

router.get('/prueba', (req, res) => {
    res.render('carpeta/nombre-archivo');
});

router.get('/prueba2', (req, res) => {
    res.render('carpeta/nombre-archivo');
});

export default router;