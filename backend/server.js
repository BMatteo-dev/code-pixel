const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 3000;
app.set('port', PORT);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

server.on('error', (error) => {
  console.error('❌ Erreur au lancement du serveur :', error.message);
});

// zQ3I2GHenZDIgDbs
