declare function produceKafkaMessage(endpoint: string, request: any): Promise<any>;
declare function consumeKafkaMessage(endpoint: string, topic: string): {
    close: () => void;
};
declare const _default: {
    consumeKafkaMessage: typeof consumeKafkaMessage;
    produceKafkaMessage: typeof produceKafkaMessage;
};
export default _default;
