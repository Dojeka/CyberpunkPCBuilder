import express, { application } from "express"
import cors from "cors"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const app = express()

app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

var application_root = __dirname

const datasetPath = path.join(
    __dirname,
    "pc-part-dataset",
    "data",
    "json"
)

function loadJSON(fileName) {
    try{
        const filePath = path.join(datasetPath, fileName)

        const rawData = fs.readFileSync(filePath, "utf-8")

        return JSON.parse(rawData)
    } catch(error) {
        console.error(`Error loading ${fileName}:`, error.message)
        return []
    }
}

const cpus = loadJSON("cpu.json")
const gpus = loadJSON("video-card.json")
const motherboards = loadJSON("motherboard.json")
const ram = loadJSON("memory.json")

//routes
app.get("/api/cpus", (req, res) => {
    res.json(cpus)
})

app.get("/api/gpus", (req, res) => {
    res.json(gpus)
})

app.get("/api/motherboards", (req, res) => {
    res.json(motherboards)
})

app.get("/api/ram", (req, res) => {
    res.json(ram)
})

app.get("/api/cpus/search/:name", (req, res) => {
    const name = req.params.name.toLowerCase()

    const results = cpus.filter(cpu => 
        cpu.name.toLowerCase().includes(name)
    )
    res.json(results)
})

app.use(express.static(path.join(application_root, 'frontend')))

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})