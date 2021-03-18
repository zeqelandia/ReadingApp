import Text from './Text.js'

export default class Reader {
    constructor(text, word) {
        this.text = new Text(text)
        this.word = word 
        this.timer = 200
        this.read = function() {
            this.word.innerText = this.text.findNextWord()
        }
        /*this.text.getText().addEventListener("click", function() {
            console.log(this)
        })*/
        this.word.innerText = this.text.findNextWord()
    }

    startReading() {
        //setInterval(this.read.bind(this), this.timer)
    }
}

