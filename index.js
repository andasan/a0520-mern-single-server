const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send({ msg: "hi"})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server has started running on port: ${PORT}`))