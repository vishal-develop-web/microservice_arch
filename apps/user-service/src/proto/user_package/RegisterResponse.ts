// Original file: src/protos/user.proto

import type { Token as _user_package_Token, Token__Output as _user_package_Token__Output } from '../user_package/Token';

export interface RegisterResponse {
  'msg'?: (string);
  'status'?: (number);
  'data'?: (_user_package_Token | null);
}

export interface RegisterResponse__Output {
  'msg'?: (string);
  'status'?: (number);
  'data'?: (_user_package_Token__Output);
}
