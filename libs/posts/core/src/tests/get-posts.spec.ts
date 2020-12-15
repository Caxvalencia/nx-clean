import { Post } from '../entities/post.entity';
import { PostRepository } from '../repositories/post.repository';
import { GetPostUseCase } from '../use-cases/get-post.use-case';

describe('Posts/Core: GetPostsUseCase', () => {
  let repository: PostRepository;
  let useCase: GetPostUseCase;

  beforeEach(() => {
    repository = { get() {} } as any;
    useCase = new GetPostUseCase(repository);
  });

  it(`Should invoke get of repository`, async () => {
    // Arrange
    spyOn(repository, 'get').and.callThrough();

    // Act
    await useCase.invoke();

    // Assert
    expect(repository.get).toBeCalled();
  });

  it(`Should return a list of posts`, async () => {
    // Arrange
    const data = [
      new Post(1, 'title', 'description'),
      new Post(2, 'title2', 'description2'),
    ];

    spyOn(repository, 'get').and.returnValue(Promise.resolve(data));

    // Act
    const response = await useCase.invoke();

    // Assert
    expect(response).toBe(data);
  });
});
