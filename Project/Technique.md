# Structure et stockage de la donnée

Nous avons à coeur de proposer de l'open data donc nous allons stocker nos données sous deux formes

* Une base de donnée SQL (sous forme de table) pour permettre un partage des données simplifiée sous frome de DB ou d'excel
* Une base de donnée distribuée de type NoSQL (sous forme de clé valeur) pour permettre une évolutivité accrue de l'application et éviter de futur ralentissement.


Pour minimiser le nombre total de données à stocker et pour avoir des données utilisable à disposition dès l'instant 0 nous allons utiliser l'API google maps et google maps review et combiner les résultats de la recherche avec nos données


structure des données google maps: https://serpapi.com/blog/using-google-maps-place-results-api-from-serpapi/

structure des données google maps review: https://pypi.org/project/google-maps-reviews/

structure de données (clé-valeur):

{full_adress : {

type : str

global_handi_score : int

handi_reviews : {

    id_0 : str,

    id_1 : str,

    ...

    id_i : str,

    ...

    id_n-1 : str,

    id_n : str}

handicap : {

    idh_0 : Bool,

    idh_1 : Bool,

    ...

    idh_i : Bool,

    ...

    idh_n-1 : Bool,

    idh_n : Bool}

}}
