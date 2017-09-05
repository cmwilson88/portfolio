const express = require('express'),
	  app = express();

app.use(express.static(`${__dirname}/../`))

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

