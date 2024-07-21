// 6-final-user.test.js
import handleProfileSignup from './6-final-user';
import { uploadPhoto, createUser } from './utils';

jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

describe('handleProfileSignup', () => {
  it('should return the correct array when promises resolve', async () => {
    uploadPhoto.mockResolvedValue({ body: 'photo' });
    createUser.mockResolvedValue({ body: 'user' });

    const result = await handleProfileSignup();

    expect(result).toEqual(['photo', 'user']);
  });

  it('should log "Signup system offline" when a promise rejects', async () => {
    uploadPhoto.mockRejectedValue(new Error('Photo upload failed'));

    console.log = jest.fn();

    await handleProfileSignup();

    expect(console.log).toHaveBeenCalledWith('Signup system offline');
  });
});
