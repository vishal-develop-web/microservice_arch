#!/bin/bash

echo "🔧 Generating TypeScript definitions from auth.proto..."

PROTO_FILE="auth.proto"
OUT_DIR="protos/"

# Check if the output directory exists, create if not
mkdir -p "$OUT_DIR"

# Run the generator
if ! npx proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir="$OUT_DIR" "$PROTO_FILE"; then
  echo "❌ Error: Failed to generate types from $PROTO_FILE"
  exit 1
fi

echo "✅ Proto types generated successfully at $OUT_DIR"
