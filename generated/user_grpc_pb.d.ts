// package: mypackage
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IKafkaProducerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMessage: IKafkaProducerServiceService_ISendMessage;
}

interface IKafkaProducerServiceService_ISendMessage extends grpc.MethodDefinition<user_pb.SendMessageRequest, google_protobuf_empty_pb.Empty> {
    path: "/mypackage.KafkaProducerService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<user_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const KafkaProducerServiceService: IKafkaProducerServiceService;

export interface IKafkaProducerServiceServer {
    sendMessage: grpc.handleUnaryCall<user_pb.SendMessageRequest, google_protobuf_empty_pb.Empty>;
}

export interface IKafkaProducerServiceClient {
    sendMessage(request: user_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMessage(request: user_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    sendMessage(request: user_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class KafkaProducerServiceClient extends grpc.Client implements IKafkaProducerServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sendMessage(request: user_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMessage(request: user_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public sendMessage(request: user_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
