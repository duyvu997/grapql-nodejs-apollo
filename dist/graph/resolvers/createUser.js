import kafkaClient from '../services/kafka/kafkaClient';
export default function (root, params) {
    console.log(root, params);
    return new Promise((resolve, reject) => {
        kafkaClient.produceKafkaMessage(params.data, function (err, response) {
            if (err) {
                return reject(err.details);
            }
            resolve({ message: "user.created", result: response });
        });
    });
}
;
//# sourceMappingURL=createUser.js.map