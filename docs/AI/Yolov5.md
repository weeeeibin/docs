# Yolov5 备忘录
>版本 Python 3.8  
>项目地址 https://github.com/ultralytics/yolov5

## 训练数据集
> 训练图片尺寸最好是32的倍数
```shell
# 创建文件结构
    train_data
    ├── images
    ├── labels
    └── data.yaml

### data.yaml 内容
    train: ./train_data/images  # 训练图片地址
    val: ./train_data/images  # 训练图片标识地址

### Classes
    nc: 1  # 标签数量
    names: ['traffic_light']  # 标签名称

## 训练

```shell
python ./train.py --img 1278 --batch 16 --data ../train_data/chiken.yaml --patience 0 --epoch 130 --cfg /content/yolov5/models/yolov5m.yaml --nosave --cache
```

## 预测
```shell
python detect.py --img 1278 --weights ./runs/train/exp/weights/last.pt --source /content/train_data/images/test/1.jpg
```