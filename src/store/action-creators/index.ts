import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as LoginActionCreators from './login';
import * as RegistrationActionCreators from './registration';

export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...LoginActionCreators,
    ...RegistrationActionCreators
}
