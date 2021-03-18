export default class Text{
    constructor (el){
        this.text = el
        this.nextWord = 0
    }

    findNextWord(){
        let word = ''
        let text = this.text.innerText
        word += text.charAt(this.nextWord)
        while(text.charAt(this.nextWord + 1) != ' ') {
            word += text.charAt(this.nextWord + 1)
            this.nextWord++
        }
        this.nextWord++

        return word
    }

    getText(){
        return this.text
    }

    setText(text){
        this.text = text
    }
}