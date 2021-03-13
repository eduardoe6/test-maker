import React from 'react'
import { withRouter } from 'react-router-dom'
import QuestionService from '../../service/QuestionService'

class Questions extends React.Component {

    constructor(props) {
        super(props)

        this.history = props.history
        this.questionService = new QuestionService()

        this.state = {
            testId: props.match.params.test,
            listQuestion: [],
            listAnswers: []
        }
    }

    async componentDidMount() {
        let resultQuestions = await this.questionService.findByTest(this.state.testId)
        this.setState({
            listQuestion: resultQuestions,
            listAnswers: resultQuestions.answers
        })
    }

    openRegisterQuestion(testId) {
        this.history.push('/register-question/' + testId)
    }

    render() {
        return (
            <div>
                <input type="button" value="Nova Questão" onClick={() => this.openRegisterQuestion(this.state.testId)} />
                {
                    this.state.listQuestion.map((q, index) => (
                        <tr key={q._id}>
                            <li> Questão:  {q.description}</li>
                            {
                                this.state.listQuestion[index].answers.map((a, index) => (
                                    <tr>
                                        <ul>
                                            <li>Alternativa {index + 1 + ": " + a.description}</li>
                                        </ul>
                                    </tr>
                                ))
                            }
                            <br />
                        </tr>
                    ))
                }
            </div>
        )
    }

}

export default withRouter(Questions)