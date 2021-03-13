import axios from 'axios'
import { WS_QUESTIONS_BY_TEST, WS_QUESTIONS } from './ServiceEndpoints'

export default class QuestionService {

    async findByTest(testId) {
        let url = WS_QUESTIONS_BY_TEST + testId
        let result = await axios.get(url)
        return result.data
    }

    async save(test) {
        await axios.post(WS_QUESTIONS, test)
    }
}