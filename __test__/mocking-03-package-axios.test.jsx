import axios from 'axios';

import mockPosts from '../mocks/mockPosts';
import postService from '../service/post-service';

jest.mock('axios');

describe('<Home />', () => {
  it('should render posts with axios', async () => {
    const mockResponse = {
      data: mockPosts,
    };
    axios.get.mockResolvedValue(mockResponse);

    const result = await postService.getPosts();
    console.log(result);

    expect(result).toEqual(mockPosts);
    expect(result).toHaveLength(mockPosts.length);
  });
});
