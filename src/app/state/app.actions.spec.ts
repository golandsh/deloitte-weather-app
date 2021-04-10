import * as fromApp from './app.actions';

describe('getWeather', () => {
  it('should return an action', () => {
    expect(fromApp.getWeather.type).toBe('[Weather] Get Weather');
  });
});
