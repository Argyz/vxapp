const express=require('express');
const { usuariosGet, usuariosPOST, usuariosPUT, usuariosDELETE } = require('../controller/user-controller');

const router=express.Router();

router.get('/', usuariosGet);

router.post('/', usuariosPOST);

router.put('/:id', usuariosPUT);

router.delete('/:id', usuariosDELETE);

module.exports=router;