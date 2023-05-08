import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';
import * as path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const PROTO_PATH = path.join(__dirname, '..', 'grpc', 'user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const kafkaProto: any = grpc.loadPackageDefinition(packageDefinition).user;

function createKafkaProducerClient(endpoint: string): any {
  return new kafkaProto.UserService(
    endpoint,
    grpc.credentials.createInsecure()
  );
}

function createKafkaConsumerClient(endpoint: string): any {
  return new kafkaProto.UserService(
    endpoint,
    grpc.credentials.createInsecure()
  );
}

export function produceKafkaMessage(
  endpoint: string,
  request: any
): Promise<any> {
  return new Promise((resolve, reject) => {
    const kafkaProducerClient = createKafkaProducerClient(endpoint);
    console.log(kafkaProducerClient);

    kafkaProducerClient.Register(request, (error: any, response: any) => {
      console.log(request);
      if (error) {
        console.log(123333, error);
        reject(error);
      } else {
        console.log(3333, response);
        resolve(response);
      }
    });
  });
}

export function consumeKafkaMessage(endpoint: string, topic: string) {
  const kafkaConsumerClient = createKafkaConsumerClient(endpoint);
  const stream = kafkaConsumerClient.consumeMessage({ topic });

  stream.on('data', (response: any) => {
    console.log('Received message:', response.message);
  });

  stream.on('end', () => {
    console.log('Finished consuming messages');
  });

  stream.on('error', (error: grpc.ServiceError) => {
    console.error('Error consuming messages:', error);
  });

  function close() {
    kafkaConsumerClient.close();
  }

  return { close };
}

// Test client function
// const PROTO_PATH = '../grpc/user.proto';
// try {
//   // Load the .proto file
//   const packageDefinition = protoLoader.loadSync(PROTO_PATH);
//   const kafkaProto: any = grpc.loadPackageDefinition(packageDefinition).sample;

//   // Verify the loaded package definition object
//   if (kafkaProto) {
//     console.log('Successfully loaded .proto file:', PROTO_PATH);
//     console.log('Package name:', kafkaProto.KafkaProducer);
//     console.log(
//       'Service names:',
//       Object.keys(kafkaProto).filter(
//         (key) => typeof kafkaProto[key] === 'function'
//       )
//     );
//     // Use the loaded kafkaProto object to create gRPC client instances and make RPCs
//   } else {
//     console.error('Failed to load .proto file:', PROTO_PATH);
//   }
// } catch (error) {
//   console.error('Error loading .proto file:', PROTO_PATH);
//   console.error(error);
// }
