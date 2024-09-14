import { Tournament } from './tournament.entity';

describe('Tournament', () => {
  it('should be defined', () => {
    expect(new Tournament()).toBeDefined();
  });
});
