# MongoDB

## MongoDB一个程序多个数据库
> 在一个程序中链接一个数据库使用mongoose.connect 链接多个则必须使用mongoose.createConnection
```javascript
var db = mongoose.createConnection('mongodb://xxx:xxx@ip:27017/数据库名?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
var TestLogSchema = new Schema({
    code:{type : String},
    time:{type : String},
    content:{type : String},
},{collection:"log"})
var TestLog = db.model("log",TestSchema);

## 数据库备份与恢复
> [Mongo-Tools下载地址](https://www.mongodb.com/try/download/database-tools)

```shell
#备份
./mongodump -h host:port -u username -p password --authenticationDatabase admin  -d 数据库名 -o .存放位置

#恢复
./mongorestore -h host:port -u username -p password --authenticationDatabase admin  -d 数据库名 存放位置
 
```