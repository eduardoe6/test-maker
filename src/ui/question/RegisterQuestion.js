import React from 'react'

import { withRouter } from 'react-router-dom'
import QuestionService from '../../service/QuestionService'

class RegisterQuestion extends React.Component {

    constructor(props) {
        super(props)

        this.history = props.history
        this.questionService = new QuestionService()

        this.state = {
            testId: props.match.params.test,
            description: '',
            correct: -1,
            answers: []
        }
    }

    updateField(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    updateAnswer(value, position) {
        let newAnswers = this.state.answers
        newAnswers[position] = value

        this.setState({
            answers: newAnswers
        })
    }

    async save() {
        let newQuestion = {}
        newQuestion.description = this.state.description
        newQuestion.test = this.state.testId
        newQuestion.answers = []

        for (let i = 0; i < this.state.answers.length; i++) {
            newQuestion.answers[i] = {
                description: this.state.answers[i],
                correct: i === parseInt(this.state.correct)
            }
        }

        await this.questionService.save(newQuestion)
        this.history.push('/questions/' + this.state.testId)
    }


    render() {
        return (
            <div>
                <form id="newQuestionForm">
                    <h3>Nova Questão</h3>

                Informe a descrição da questão: <br />
                    <input type="text" size="30" name="description"
                        onChange={event => this.updateField(event)} /> <br /> <br />

                    Opções (marque a opção correta): <br /> <br />

                    Alternativa 1 <br />
                    <input type="text" size="35" onChange={event => this.updateAnswer(event.target.value, 0)} />
                    <input type="radio" value="0" name="correct" onChange={event => this.updateField(event)} /> Correta<br />

                    Alternativa 2 <br />
                    <input type="text" size="35" onChange={event => this.updateAnswer(event.target.value, 1)} />
                    <input type="radio" value="1" name="correct" onChange={event => this.updateField(event)} /> Correta<br />

                    Alternativa 3 <br />
                    <input type="text" size="35" onChange={event => this.updateAnswer(event.target.value, 2)} />
                    <input type="radio" value="2" name="correct" onChange={event => this.updateField(event)} /> Correta<br />

                    Alternativa 4 <br />
                    <input type="text" size="35" onChange={event => this.updateAnswer(event.target.value, 3)} />
                    <input type="radio" value="3" name="correct" onChange={event => this.updateField(event)} /> Correta<br />

                    Alternativa 5 <br />
                    <input type="text" size="35" onChange={event => this.updateAnswer(event.target.value, 4)} />
                    <input type="radio" value="4" name="correct" onChange={event => this.updateField(event)} /> Correta<br /><br />

                    <input type="button" value="Salvar" onClick={() => this.save()} />
                </form>
            </div>

        )
    }
}

export default withRouter(RegisterQuestion)