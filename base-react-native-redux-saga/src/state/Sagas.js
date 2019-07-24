// @flow
import LoginSagas from './login/Sagas'

export default function * root() {
    yield [
       LoginSagas()
    ]
}
