// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mypackage_SendMessageRequest(arg) {
  if (!(arg instanceof user_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type mypackage.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mypackage_SendMessageRequest(buffer_arg) {
  return user_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Kafka producer service
var KafkaProducerServiceService = exports.KafkaProducerServiceService = {
  // Sends a message to Kafka
sendMessage: {
    path: '/mypackage.KafkaProducerService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.SendMessageRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_mypackage_SendMessageRequest,
    requestDeserialize: deserialize_mypackage_SendMessageRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.KafkaProducerServiceClient = grpc.makeGenericClientConstructor(KafkaProducerServiceService);
