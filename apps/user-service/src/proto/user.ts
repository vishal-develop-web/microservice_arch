import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserClient as _user_package_UserClient, UserDefinition as _user_package_UserDefinition } from './user_package/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  user_package: {
    AvatarReq: MessageTypeDefinition
    CourseList: MessageTypeDefinition
    Courses: MessageTypeDefinition
    GetUserRequest: MessageTypeDefinition
    GetUserResponse: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    LoginResponse: MessageTypeDefinition
    MonthData: MessageTypeDefinition
    PasswordReq: MessageTypeDefinition
    RegisterRequest: MessageTypeDefinition
    RegisterResponse: MessageTypeDefinition
    SocialReq: MessageTypeDefinition
    Token: MessageTypeDefinition
    UpdateUserInfoReq: MessageTypeDefinition
    User: SubtypeConstructor<typeof grpc.Client, _user_package_UserClient> & { service: _user_package_UserDefinition }
    UserAnalytics: MessageTypeDefinition
    UserAnalyticsRes: MessageTypeDefinition
    UserRes: MessageTypeDefinition
  }
}

