import React from 'react'
import { withRouter } from 'react-router-dom'

import TestService from '../../service/TestService'

class ListTest extends React.Component {

    constructor(props) {
        super(props)

        this.history = props.history
        this.testService = new TestService()

        this.state = {
            listTest: []
        }
    }

    async componentDidMount() {
        let result = await this.testService.findAll()
        this.setState({
            listTest: result
        })
    }

    openRegister() {
        this.history.push('/register-test')
    }

    openQuestions(testId) {
        this.history.push('/questions/' + testId)
    }

    render() {
        return (
            <div>

                <table style={{ width: "90%" }} border="1">
                    <thead>
                        <tr>
                            <th>Teste</th>
                            <th width="15%">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.listTest.map(t => (
                                <tr key={t._id}>
                                    <td>{t.name}</td>
                                    <td>
                                        <input type="button" value="Questões" onClick={() => this.openQuestions(t._id)} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                <br />
                <input type="button" value="Novo Teste" onClick={() => this.openRegister()} />
            </div>
        )
    }
}

export default withRouter(ListTest)