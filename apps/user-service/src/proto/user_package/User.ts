// Original file: src/protos/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AvatarReq as _user_package_AvatarReq, AvatarReq__Output as _user_package_AvatarReq__Output } from '../user_package/AvatarReq';
import type { CourseList as _user_package_CourseList, CourseList__Output as _user_package_CourseList__Output } from '../user_package/CourseList';
import type { GetUserRequest as _user_package_GetUserRequest, GetUserRequest__Output as _user_package_GetUserRequest__Output } from '../user_package/GetUserRequest';
import type { GetUserResponse as _user_package_GetUserResponse, GetUserResponse__Output as _user_package_GetUserResponse__Output } from '../user_package/GetUserResponse';
import type { LoginRequest as _user_package_LoginRequest, LoginRequest__Output as _user_package_LoginRequest__Output } from '../user_package/LoginRequest';
import type { LoginResponse as _user_package_LoginResponse, LoginResponse__Output as _user_package_LoginResponse__Output } from '../user_package/LoginResponse';
import type { PasswordReq as _user_package_PasswordReq, PasswordReq__Output as _user_package_PasswordReq__Output } from '../user_package/PasswordReq';
import type { RegisterRequest as _user_package_RegisterRequest, RegisterRequest__Output as _user_package_RegisterRequest__Output } from '../user_package/RegisterRequest';
import type { RegisterResponse as _user_package_RegisterResponse, RegisterResponse__Output as _user_package_RegisterResponse__Output } from '../user_package/RegisterResponse';
import type { SocialReq as _user_package_SocialReq, SocialReq__Output as _user_package_SocialReq__Output } from '../user_package/SocialReq';
import type { Token as _user_package_Token, Token__Output as _user_package_Token__Output } from '../user_package/Token';
import type { UpdateUserInfoReq as _user_package_UpdateUserInfoReq, UpdateUserInfoReq__Output as _user_package_UpdateUserInfoReq__Output } from '../user_package/UpdateUserInfoReq';
import type { UserAnalytics as _user_package_UserAnalytics, UserAnalytics__Output as _user_package_UserAnalytics__Output } from '../user_package/UserAnalytics';
import type { UserAnalyticsRes as _user_package_UserAnalyticsRes, UserAnalyticsRes__Output as _user_package_UserAnalyticsRes__Output } from '../user_package/UserAnalyticsRes';
import type { UserRes as _user_package_UserRes, UserRes__Output as _user_package_UserRes__Output } from '../user_package/UserRes';

export interface UserClient extends grpc.Client {
  ActivateUser(argument: _user_package_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  ActivateUser(argument: _user_package_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  ActivateUser(argument: _user_package_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  ActivateUser(argument: _user_package_Token, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  activateUser(argument: _user_package_Token, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  activateUser(argument: _user_package_Token, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  activateUser(argument: _user_package_Token, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  activateUser(argument: _user_package_Token, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  
  GetUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  GetUser(argument: _user_package_GetUserRequest, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  getUser(argument: _user_package_GetUserRequest, callback: grpc.requestCallback<_user_package_GetUserResponse__Output>): grpc.ClientUnaryCall;
  
  GetUsersAnalytics(argument: _user_package_UserAnalytics, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  GetUsersAnalytics(argument: _user_package_UserAnalytics, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  GetUsersAnalytics(argument: _user_package_UserAnalytics, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  GetUsersAnalytics(argument: _user_package_UserAnalytics, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  getUsersAnalytics(argument: _user_package_UserAnalytics, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  getUsersAnalytics(argument: _user_package_UserAnalytics, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  getUsersAnalytics(argument: _user_package_UserAnalytics, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  getUsersAnalytics(argument: _user_package_UserAnalytics, callback: grpc.requestCallback<_user_package_UserAnalyticsRes__Output>): grpc.ClientUnaryCall;
  
  Login(argument: _user_package_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_package_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_package_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _user_package_LoginRequest, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_package_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_package_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_package_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _user_package_LoginRequest, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Register(argument: _user_package_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_package_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_package_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  Register(argument: _user_package_RegisterRequest, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_package_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_package_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_package_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  register(argument: _user_package_RegisterRequest, callback: grpc.requestCallback<_user_package_RegisterResponse__Output>): grpc.ClientUnaryCall;
  
  SocialAuth(argument: _user_package_SocialReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  SocialAuth(argument: _user_package_SocialReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  SocialAuth(argument: _user_package_SocialReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  SocialAuth(argument: _user_package_SocialReq, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  socialAuth(argument: _user_package_SocialReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  socialAuth(argument: _user_package_SocialReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  socialAuth(argument: _user_package_SocialReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  socialAuth(argument: _user_package_SocialReq, callback: grpc.requestCallback<_user_package_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateAvatar(argument: _user_package_AvatarReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateAvatar(argument: _user_package_AvatarReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateAvatar(argument: _user_package_AvatarReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateAvatar(argument: _user_package_AvatarReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateAvatar(argument: _user_package_AvatarReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateAvatar(argument: _user_package_AvatarReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateAvatar(argument: _user_package_AvatarReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateAvatar(argument: _user_package_AvatarReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  
  UpdateCourseList(argument: _user_package_CourseList, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateCourseList(argument: _user_package_CourseList, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateCourseList(argument: _user_package_CourseList, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateCourseList(argument: _user_package_CourseList, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateCourseList(argument: _user_package_CourseList, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateCourseList(argument: _user_package_CourseList, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateCourseList(argument: _user_package_CourseList, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateCourseList(argument: _user_package_CourseList, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  
  UpdatePassword(argument: _user_package_PasswordReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _user_package_PasswordReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _user_package_PasswordReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdatePassword(argument: _user_package_PasswordReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _user_package_PasswordReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _user_package_PasswordReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _user_package_PasswordReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updatePassword(argument: _user_package_PasswordReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  
  UpdateUserInfo(argument: _user_package_UpdateUserInfoReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateUserInfo(argument: _user_package_UpdateUserInfoReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateUserInfo(argument: _user_package_UpdateUserInfoReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  UpdateUserInfo(argument: _user_package_UpdateUserInfoReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _user_package_UpdateUserInfoReq, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _user_package_UpdateUserInfoReq, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _user_package_UpdateUserInfoReq, options: grpc.CallOptions, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  updateUserInfo(argument: _user_package_UpdateUserInfoReq, callback: grpc.requestCallback<_user_package_UserRes__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  ActivateUser: grpc.handleUnaryCall<_user_package_Token__Output, _user_package_UserRes>;
  
  GetUser: grpc.handleUnaryCall<_user_package_GetUserRequest__Output, _user_package_GetUserResponse>;
  
  GetUsersAnalytics: grpc.handleUnaryCall<_user_package_UserAnalytics__Output, _user_package_UserAnalyticsRes>;
  
  Login: grpc.handleUnaryCall<_user_package_LoginRequest__Output, _user_package_LoginResponse>;
  
  Register: grpc.handleUnaryCall<_user_package_RegisterRequest__Output, _user_package_RegisterResponse>;
  
  SocialAuth: grpc.handleUnaryCall<_user_package_SocialReq__Output, _user_package_LoginResponse>;
  
  UpdateAvatar: grpc.handleUnaryCall<_user_package_AvatarReq__Output, _user_package_UserRes>;
  
  UpdateCourseList: grpc.handleUnaryCall<_user_package_CourseList__Output, _user_package_UserRes>;
  
  UpdatePassword: grpc.handleUnaryCall<_user_package_PasswordReq__Output, _user_package_UserRes>;
  
  UpdateUserInfo: grpc.handleUnaryCall<_user_package_UpdateUserInfoReq__Output, _user_package_UserRes>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  ActivateUser: MethodDefinition<_user_package_Token, _user_package_UserRes, _user_package_Token__Output, _user_package_UserRes__Output>
  GetUser: MethodDefinition<_user_package_GetUserRequest, _user_package_GetUserResponse, _user_package_GetUserRequest__Output, _user_package_GetUserResponse__Output>
  GetUsersAnalytics: MethodDefinition<_user_package_UserAnalytics, _user_package_UserAnalyticsRes, _user_package_UserAnalytics__Output, _user_package_UserAnalyticsRes__Output>
  Login: MethodDefinition<_user_package_LoginRequest, _user_package_LoginResponse, _user_package_LoginRequest__Output, _user_package_LoginResponse__Output>
  Register: MethodDefinition<_user_package_RegisterRequest, _user_package_RegisterResponse, _user_package_RegisterRequest__Output, _user_package_RegisterResponse__Output>
  SocialAuth: MethodDefinition<_user_package_SocialReq, _user_package_LoginResponse, _user_package_SocialReq__Output, _user_package_LoginResponse__Output>
  UpdateAvatar: MethodDefinition<_user_package_AvatarReq, _user_package_UserRes, _user_package_AvatarReq__Output, _user_package_UserRes__Output>
  UpdateCourseList: MethodDefinition<_user_package_CourseList, _user_package_UserRes, _user_package_CourseList__Output, _user_package_UserRes__Output>
  UpdatePassword: MethodDefinition<_user_package_PasswordReq, _user_package_UserRes, _user_package_PasswordReq__Output, _user_package_UserRes__Output>
  UpdateUserInfo: MethodDefinition<_user_package_UpdateUserInfoReq, _user_package_UserRes, _user_package_UpdateUserInfoReq__Output, _user_package_UserRes__Output>
}
