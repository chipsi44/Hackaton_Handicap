#get google maps api by adress
import googlemaps


def get_g_infos(address : str) -> dict{str : str}:

    """
    Get google maps informations from an address from a place
    :param address: the address of the place
    :return: a dictionary with the informations, rating, etc.
    """

    api_key = 'YOUR_API_KEY_HERE'
    gmaps = googlemaps.Client(key=api_key)

    geocode_result = gmaps.geocode(address)

    return geocode_result[0]['address_components']