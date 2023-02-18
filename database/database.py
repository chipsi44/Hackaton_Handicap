from sqlalchemy import Column, Integer, String, ForeignKey, Boolean
from sqlalchemy.orm import declarative_base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

Base = declarative_base()

class Address(Base):
    __tablename__ = 'Address'

    id = Column(Integer, primary_key=True)
    country = Column(String)
    city = Column(String)
    zip_code = Column(Integer)
    street = Column(String)
    number = Column(Integer)
    box = Column(String)
    
    def __init__(self, country : str,
                 city : str,
                 zip_code : int,
                 street : str,
                 number : int,
                 box : str):
        self.country = country
        self.city = city
        self.zip_code = zip_code
        self.street = street
        self.number = number
        self.box = box
    
class Accessibility(Base):
    __tablename__ = 'Accessibility'
    
    id = Column(Integer, primary_key=True)
    id_address = Column(ForeignKey)
    wheelchair = Column(Boolean)
    cane = Column(Boolean)
    visually_impaired = Column(Boolean)
    
    def __init__(self, id_address : int,
                 wheelchair : bool,
                 cane : bool,
                 visually_impaired : bool):
        self.id_address = id_address
        self.wheelchair = wheelchair
        self.cane = cane
        self.visually_impaired = visually_impaired
        
class Amenagement(Base):
    __tablename__ = "Amenagment"
    
    id = Column(Integer, primary_key=True)
    id_address = Column(ForeignKey)
    flat = Column(Boolean)
    
    def __init__(self, id_address : int,
                 flat : bool):
        self.id_address = id_address
        self.flat = flat
        
    
engine = create_engine('sqlite:///api_db.db')
Base.metadata.create_all(engine)

Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()