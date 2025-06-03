// Original file: src/protos/user.proto

import type { Courses as _user_package_Courses, Courses__Output as _user_package_Courses__Output } from '../user_package/Courses';

export interface GetUserResponse {
  'id'?: (string);
  'name'?: (string);
  'avatar'?: (string);
  'role'?: (string);
  'isVerified'?: (string);
  'email'?: (string);
  'courses'?: (_user_package_Courses)[];
}

export interface GetUserResponse__Output {
  'id'?: (string);
  'name'?: (string);
  'avatar'?: (string);
  'role'?: (string);
  'isVerified'?: (string);
  'email'?: (string);
  'courses'?: (_user_package_Courses__Output)[];
}
