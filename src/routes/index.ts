import 'reflect-metadata';
import { Router } from 'express';
import loaispRouter from './loaispRouter';
import sanphamRouter from './sanphamRouter';
import nhaphanphoiRouter from './nhaphanphoiRouter';
import hoadonnhapRouter from './hoadonnhapRouter';
import bannerRouter from './bannerRouter';

const router = Router();

router.use('/loaisp',loaispRouter)
router.use('/sanpham',sanphamRouter)
router.use('/nhaphanphoi',nhaphanphoiRouter)
router.use('/hoadonnhap',hoadonnhapRouter)
router.use('/banner',bannerRouter)

export default router;