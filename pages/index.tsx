import { faEnvelope, faUnlock } from '@fortawesome/fontawesome-free-solid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { Button } from '../components/atoms/Button'
import { Input } from '../components/atoms/Input'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '../components/atoms/SigninWrapper'

export default () => (
  <SigninWrapper>
    <SigninWrapperInner>
      <form action='#' method='post'>
        <SigninWrapperInput>
          <Input type='email' placeholder={'email'} />
          <FontAwesomeIcon Icon={faEnvelope} />
        </SigninWrapperInput>
        <SigninWrapperInput>
          <Input type='password' placeholder={'password'} />
          <FontAwesomeIcon Icon={faUnlock} />
        </SigninWrapperInput>
        <Button disabled>Sign in</Button>
      </form>
    </SigninWrapperInner>
  </SigninWrapper>
)
