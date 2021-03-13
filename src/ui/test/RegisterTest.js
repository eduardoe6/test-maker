import React from 'react'
import { withRouter } from 'react-router-dom'

import TestService from '../../service/TestService'

class RegisterTest extends React.Component {

    constructor(props) {
        super(props)

        this.history = props.history
        this.testService = new TestService()

        this.state = {
            name: ''
        }
    }

    updateField(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    async save() {
        let test = {
            name: this.state.name
        }

        await this.testService.save(test)
        this.history.push('/tests')
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Novo Teste</h3>

                Informe o nome do teste: <br />
                    <input type="text" size="30" name="name"
                        onChange={event => this.updateField(event)} /> <br />

                    <input type="button" value="Salvar" onClick={() => this.save()} />
                </form>
            </div>
        )
    }

}

export default withRouter(RegisterTest)