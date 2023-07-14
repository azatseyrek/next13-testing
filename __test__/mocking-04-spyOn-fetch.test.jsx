// Burda yapmak istedigimiz axios gbi bir paketi degilde window icerisindeki fetch gibi bir api ile mock data olusturmak.
// Bu yuzden jest.mock('axios'); yerine jest.spyOn(window, 'fetch'); kullaniyoruz.
import mockPosts from '../mocks/mockPosts';
import postService from '../service/post-service';

// jest.mock('fetch'); calismaz cunku fetch bir paket degil. cozum olarak spyOn kullanacagiz

// const fetch = jest.spyOn(window, 'fetch');

describe('<Home />', () => {
  it('should render posts with fetch', async () => {
    // fetch.mockResolvedValue({
    //   json: () => {
    //     return Promise.resolve({
    //       data: mockPosts,
    //     });
    //   },
    // });
    // const result = await postService.getPosts();
    // expect(result).toEqual(mockPosts);
    // expect(result).toHaveLength(mockPosts.length);
  });
});
