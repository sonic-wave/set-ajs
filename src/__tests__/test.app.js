import Team from '../app';

const team = new Team();

test('Add char first time', () => {
  team.add('Bowman');
  team.toArray();
  expect(team.members).toStrictEqual(['Bowman']);
});

test('Add char second time', () => {
  team.add('Bowman');
  expect(() => team.add('Bowman')).toThrow('Персонаж уже существует в команде');
});

test('Add all chars', () => {
  team.addAll(['Bowman', 'Swordsman', 'Daemon'], ['Bowman']);
  team.toArray();
  expect(team.members).toEqual([['Bowman', 'Swordsman', 'Daemon'], ['Bowman']]);
});

test('Convert Set to array', () => {
  team.add('Bowman');
  team.toArray();
  expect(team.members).toEqual(['Bowman']);
});
