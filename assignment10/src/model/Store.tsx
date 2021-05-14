
export class Store {
    getDataForPage = (page: number): string[] => {
        const arr = [];
        for (let i = (page - 1) * 10; i < 10 * page; i++) {
          arr.push('Entry ' + i);
        }
        return arr;
      }
}