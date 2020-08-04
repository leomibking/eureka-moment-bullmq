import { Teste } from '../models/Teste';

test('it should be ok', () => {
  const teste = new Teste('teste');
  expect(teste).toEqual(teste);
});
