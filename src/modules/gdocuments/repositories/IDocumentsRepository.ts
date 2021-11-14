import CreateDocumentsDTO from '../dtos/CreateDocumentsDTO';
import Document from '../infra/typeorm/entities/Document';

export default interface IDocumentsRepository {
  create(data: CreateDocumentsDTO): Promise<Document>;
}
