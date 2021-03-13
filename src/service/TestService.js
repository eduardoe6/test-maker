import axios from 'axios'

import { WS_TESTS } from './ServiceEndpoints'

export default class TestService {

    async findAll() {
        let result = await axios.get(WS_TESTS)
        return result.data
    }

    async save(test) {
        await axios.post(WS_TESTS, test)
    }
}
