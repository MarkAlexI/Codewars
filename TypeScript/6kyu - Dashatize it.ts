export const dashatize = (num: number): string => {
  if (typeof num !== 'number') return 'NaN';
  return num
            .toString()
            .replace(/([13579])/g, '-$1-')
            .replace(/--/g, '-')
            .replace(/^-|-$/g, '');
};
