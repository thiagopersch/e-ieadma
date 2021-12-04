import { getRepository, Repository } from 'typeorm';

import CreateStudentDTO from '@modules/eEBD/dtos/CreateStudentDTO';
import IStudentsRepository from '@modules/eEBD/repositories/IStudentsRepository';
import Student from '../entities/Student';

class StudentRepository implements IStudentsRepository {
  private ormRepository: Repository<Student>;

  constructor() {
    this.ormRepository = getRepository(Student);
  }

  public async findAll(): Promise<Student[]> {
    const student = await this.ormRepository.find();
    return student;
  }

  public async create({
    ACHURCHMEMBERS_ID,
  }: CreateStudentDTO): Promise<Student> {
    const student = await this.ormRepository.create({ ACHURCHMEMBERS_ID });
    await this.ormRepository.save(student);

    return student;
  }

  public async update(student: Student): Promise<Student> {
    await this.ormRepository.save(student);
    return student;
  }
}

export default StudentRepository;
