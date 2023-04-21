export declare function produceKafkaMessage(endpoint: string, request: any): Promise<any>;
export declare function consumeKafkaMessage(endpoint: string, topic: string): {
    close: () => void;
};
