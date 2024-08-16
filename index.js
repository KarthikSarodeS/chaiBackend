require('dotenv').config()

const express = require('express')

const app = express()

const someJSON = {
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}

app.get('/', (req, res) => {
    res.send('Karthik Sarode')
})

app.get('/twitter', (req, res) => {
    res.send('This is twitter')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login here for the fun')
})

app.get('/sampleJSON', (req, res) => {
    res.json(someJSON)
})

app.listen(process.env.PORT, () => {
    console.log('Listening to port 3000 in  Karthiks macBook')
})