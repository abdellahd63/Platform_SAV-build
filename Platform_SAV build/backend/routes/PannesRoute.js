const express = require('express');
const {
    index,
    GetAllDelivred,
    GetByID,
    GetByUserID,
    GetByRefProduct,
    Create,
    Update,
    Remove,
    GetTop3Product,
    GetTop3Pannes,
    UplaodIMG,
    upload,
    UpdateGarantie,
    calculateAverageRepairTime
} = require('../controllers/PannesController');
const router = express.Router();
const requireAuth = require('../middleware/requireAuth');

router.post('/', Create);
//secure all routes below
router.use(requireAuth);
router.get('/', index);
router.get('/Delivred', GetAllDelivred);
router.get('/:id', GetByID);
router.get('/byuser/:id', GetByUserID);
router.get('/All/:Ref/:id', GetByRefProduct);
router.get('/Product/Top3', GetTop3Product);
router.get('/Pannes/Top3', GetTop3Pannes);
router.post('/IMG',upload, UplaodIMG);
router.delete('/:id', Remove);
router.patch('/:id', Update);
router.patch('/Garantie/:id', UpdateGarantie);
router.get('/Average/time/:id',calculateAverageRepairTime);

module.exports = router;
