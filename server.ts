import {app} from "./src/app"

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is runing on http://localhost:${port}`))
