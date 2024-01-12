import { removeDups } from './removeDups'

test("remove dups in place in array", () => {
  expect(removeDups([1,1,2])).toStrictEqual([1,2,'_'])
  expect(removeDups([0,0,1,1,1,2,2,3,3,4])).toStrictEqual([0,1,2,3,4,'_','_','_','_','_'])
})
