import json
import os

data = {
    "0 nowhere 0000 void void" : {

        "Type" : "Drinking",
        "subtype" : "Bar",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    },

    "1 Noway 0000 void void" : {

        "Type" : "entertainment",
        "subtype" : "Cinema",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    },

    "2 Norvege 0000 void void" : {

        "Type" : "Sport",
        "subtype" : "Kart",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    },

    "3 Narnia 0000 void void" : {

        "Type" : "Sport",
        "subtype" : "Pool",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    },

    "3 NineThreeForth 0000 void void" : {

        "Type" : "Sport",
        "subtype" : "Soccer",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    },

    "4 AlcoholicComa 0000 void vois" : {

        "Type" : "Drinking",
        "subtype" : "Bar",
        "Global_handi_score" : 0,
        "handi_reviews" : {
            0 : 0,
            1 : 0
        },
        "handicap" : {
            0 : False,
            1 : False
        }
    }

}

with open('own_data.json', 'w') as f:
    json.dump(data, f, indent=4)