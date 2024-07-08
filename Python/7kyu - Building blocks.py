class Block:
    def __init__(self, data):
        width, length, height = data
        self.width = width
        self.length = length
        self.height = height
        self.volume = width * length * height
        self.surface_area = 2*(width*length + width*height + length*height)

    def get_width(self):
        return self.width

    def get_length(self):
        return self.length

    def get_height(self):
        return self.height

    def get_volume(self):
        return self.volume

    def get_surface_area(self):
        return self.surface_area
