
import kafkaClient from '../services/kafka/kafkaClient';

export default function (root: any, params: any)  {
  console.log(root, params);
  return new Promise((resolve: any, reject: any) => {
    kafkaClient.produceKafkaMessage(params.data, function(err: any, response: any) {
      if (err) {
        return reject(err.details);
      }
      resolve({message: "user.created", result: response});
    });
  });
};
