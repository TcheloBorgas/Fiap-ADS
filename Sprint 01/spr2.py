import cv2

# Carrega o modelo de detecção de objetos treinado
net = cv2.dnn.readNetFromTensorflow('faster_rcnn_inception_v2_coco_2018_01_28/frozen_inference_graph.pb', 'faster_rcnn_inception_v2_coco_2018_01_28/graph.pbtxt')

# Carrega a imagem que será processada
image = cv2.imread('bike.jpg')

# Prepara a imagem para ser processada pelo modelo
blob = cv2.dnn.blobFromImage(image, swapRB=True, crop=False)

# Passa a imagem pelo modelo de detecção de objetos
net.setInput(blob)
output = net.forward()

# Processa as saídas do modelo e exibe as detecções de bicicletas
for detection in output[0, 0, :, :]:
    class_id = int(detection[1])
    if class_id == 2:  # 2 é o ID da classe "bicicleta" no modelo COCO
        confidence = detection[2]
        if confidence > 0.5:  # Considera apenas detecções com confiança acima de 50%
            x1 = int(detection[3] * image.shape[1])
            y1 = int(detection[4] * image.shape[0])
            x2 = int(detection[5] * image.shape[1])
            y2 = int(detection[6] * image.shape[0])
            cv2.rectangle(image, (x1, y1), (x2, y2), (0, 255, 0), 2)  # Desenha um retângulo verde ao redor da bicicleta

# Exibe a imagem com as detecções de bicicletas
cv2.imshow('Detecção de bicicletas', image)
cv2.waitKey(0)