import Text from './Text.js'
import Reader from './Reader.js'

const txt = document.getElementById('txtText')
const wrd = document.getElementById('txtWord')
const reader = new Reader(txt, wrd)
reader.startReading()

/*
TO-DO:
    - Add a play/pause button
    - Let user adjust reading speed
    - Let user pick the piece of text to read
*/