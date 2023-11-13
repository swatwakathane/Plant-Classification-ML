from ultralytics import YOLO

# Load a model
model = YOLO("yolov8n.yaml")  # build a new model from scratch

# Training the model
model.train(data="data.yaml", epochs=2)  # train the model