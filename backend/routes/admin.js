const router = require('express').Router();
const { adminPgPool } = require('../db');
const { diffUploadedFiles, updateDashboard, refreshAllMVs, dumpDatabase } = require('../cron');

// Always checks if user is an administrator
router.use((req, res, next) => {
  const { role } = req.cmmsSession;
  if(role === 'administrator'){
    next();
  } else {
    res.status(401).json({ error: 'Você não é um administrador' });
  }
});

// Executes administrator's query
router.post(
  '/query',
  async (req, res) => {
    const { rows } = await adminPgPool.query(req.body.query, req.body.params);
    res.json({ rows });
  }
);

router.post(
  '/cronjob',
  async (req, res, next) => {
    try {
      switch(req.body.cronjob){
        case 'diff': await diffUploadedFiles(); break;
        case 'dump': await dumpDatabase(); break;
        case 'dashboard': await updateDashboard(); break;
        case 'refresh': await refreshAllMVs(); break;
        default: res.status(400).json({ error: 'Job não existente' });
      }
    res.json({ admin: 'Job executada com sucesso'});
  } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Erro na execução' });
    }
  }
);

module.exports = router;
