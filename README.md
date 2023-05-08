### install dependencies
```shell
npm install
```
### run server 
```shell
npm start 
```

### gen grpc 
```shell
grpc_tools_node_protoc --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts --grpc_out=./generated --js_out=import_style=commonjs,binary:./generated --ts_out=./generated -I ./src/graph/services/grpc ./src/graph/services/grpc/user.proto
```

### gen new graph

```shell
npm run generate
```

### please help to resolve TODO issues. 