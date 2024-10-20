export function getDrinkByProfession(profession: string ): string {
  interface IStringIndex {
    [key: string]: string
  };
  const dict: IStringIndex = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal',
  };
  return dict[profession.toLowerCase()] || 'Beer';
}
