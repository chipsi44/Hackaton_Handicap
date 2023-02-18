class User():
    def __init__(self, name : str,
                 xp : int, wheelchair : bool,
                 service_dog : bool, hard_hearing : bool,
                 visually_impaired : bool):
        self.name = name
        self.level = xp / 1000
        self.xp = xp % 1000,
        self.wheelchair = wheelchair
        self.service_dog = service_dog
        self.hard_hearing = hard_hearing
        self.visually_impaired = visually_impaired