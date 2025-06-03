// Original file: src/protos/user.proto

import type { Courses as _user_package_Courses, Courses__Output as _user_package_Courses__Output } from '../user_package/Courses';

export interface _user_package_LoginResponse_User {
  'name'?: (string);
  'email'?: (string);
  'avatar'?: (string);
  'role'?: (string);
  'isVerified'?: (string);
  'courses'?: (_user_package_Courses)[];
}

export interface _user_package_LoginResponse_User__Output {
  'name'?: (string);
  'email'?: (string);
  'avatar'?: (string);
  'role'?: (string);
  'isVerified'?: (string);
  'courses'?: (_user_package_Courses__Output)[];
}

export interface LoginResponse {
  'accessToken'?: (string);
  'refreshToken'?: (string);
  'user'?: (_user_package_LoginResponse_User | null);
}

export interface LoginResponse__Output {
  'accessToken'?: (string);
  'refreshToken'?: (string);
  'user'?: (_user_package_LoginResponse_User__Output);
}
