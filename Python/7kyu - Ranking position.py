from typing import List, Dict

def ranking(people: List[Dict[str, any]]) -> List[Dict[str, any]]:
    sorted_people = sorted(people, key=lambda x: (-x['points'], x['name']))

    for i, person in enumerate(sorted_people):
        if i > 0 and sorted_people[i]['points'] == sorted_people[i-1]['points']:
            person['position'] = sorted_people[i-1]['position']
        else:
            person['position'] = i + 1

    return sorted_people
