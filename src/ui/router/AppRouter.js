import React from 'react'

import { Switch, Route } from 'react-router-dom'

import ListTest from '../test/ListTest'
import RegisterTest from '../test/RegisterTest'
import Questions from '../question/Questions'
import RegisterQuestion from '../question/RegisterQuestion'

class AppRouter extends React.Component {

    render() {
        return (
            <div style={{ marginTop: 20 }}>
                <Switch>
                    <Route path="/tests">
                        <ListTest />
                    </Route>
                    <Route path="/register-test">
                        <RegisterTest />
                    </Route>
                    <Route path="/questions/:test">
                        <Questions />
                    </Route>
                    <Route path="/register-question/:test">
                        <RegisterQuestion />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default AppRouter