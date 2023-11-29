import { Test, TestingModule } from "@nestjs/testing";
import { getRepositoryToken } from "@nestjs/typeorm";
import { CreateBookManagementDto } from "../book_management/dto/create-book_management.dto";
import { BookManagement } from "../../entities/book_management.entity";
import { BookManagementService } from "../book_management/book_management.service";

describe("BookManagementService", () => {
  let service: BookManagementService;

  const mockUserRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookManagementService,
        {
          provide: getRepositoryToken(BookManagement),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<BookManagementService>(BookManagementService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("create => Should create a new user and return its data", async () => {
    // arrange
    const CreateBookManagementDto = {
      title: "quotes2",
      isbn: "aa",
    } as CreateBookManagementDto;
        
    const user = {
      bookId: 1,
      title: "quotes2",
      isbn: "aa",
    } as BookManagement;

    jest.spyOn(mockUserRepository, "save").mockReturnValue(user);
    // act
    const result = await service.bookService(CreateBookManagementDto);

    // assert
    expect(mockUserRepository.save).toBeCalled();
    expect(mockUserRepository.save).toBeCalledWith(CreateBookManagementDto);

    expect(result).toEqual(user);
  });
});
