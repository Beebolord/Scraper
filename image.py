import cv2

# path
path = r'/home/ismael/github/Scraper/images/sampletext.png'

# Using cv2.imread() method
# Using 0 to read image in grayscale mode
img = cv2.imread(path)

# Displaying the image
cv2.imshow('image', img)
