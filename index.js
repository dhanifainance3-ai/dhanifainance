const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello! Server chal raha hai 🚀');
});

app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
