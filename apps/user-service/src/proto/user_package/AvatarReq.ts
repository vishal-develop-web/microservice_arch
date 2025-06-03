// Original file: src/protos/user.proto


export interface AvatarReq {
  'data'?: (Buffer | Uint8Array | string);
  'filename'?: (string);
  'mimetype'?: (string);
  'id'?: (string);
}

export interface AvatarReq__Output {
  'data'?: (Buffer);
  'filename'?: (string);
  'mimetype'?: (string);
  'id'?: (string);
}
