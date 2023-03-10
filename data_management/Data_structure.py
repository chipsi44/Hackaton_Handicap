class handi_data:

    def __init__(self, 
                 full_adress : str,
                 typ : str,
                 Global_handi_score : int, 
                 handi_reviews : dict[int:str], 
                 handicap : dict[int:bool]
                                                ) -> None:


        """
        :param full_adress: the full adress of the place
        :param type: the type of the place
        :param Global_handi_score: the global score of the place
        :param handi_reviews: the reviews of the place
        :param handicap: the handicap of the place
        """

        self.full_adress = full_adress

        self.type = typ

        self.Global_handi_score = Global_handi_score

        self.handi_reviews = handi_reviews

        self.handicap = handicap
        
        return None

    def get_data() -> dict[str: dict[str : int or str or dict[int:str] or dict[int:bool]]]:
            
        """
        Get the data from the database
        :return: a dictionary with the data
        """
    
        return {
            self.full_adress : {
                'type' : self.type,
                'Global_handi_score' : self.Global_handi_score,
                'handi_reviews' : self.handi_reviews,
                'handicap' : self.handicap
            }
        }

    def Push_to_db(db) -> None:
            
        """
        Push the data to the database
        :param db: the database
        :return: None
        """
            
        db.push(self.get_data())
            
        return None
