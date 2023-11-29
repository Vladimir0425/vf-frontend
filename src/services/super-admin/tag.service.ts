import { HttpService } from '@/services/global';

export class TagService {
  static async findOne(id: string) {
    return await HttpService.get(`/tag/${id}`);
  }

  static async findAll(filter: string = '', category: string = '') {
    return await HttpService.get(`/tag?name=${filter}&status=${category}`);
  }

  static async createOne(category: any) {
    return await HttpService.post('/tag', category);
  }

  static async updateOne(id: string, category: any) {
    return await HttpService.put(`/tag?id=${id}`, category);
  }

  static async deleteOne(id: string) {
    return await HttpService.delete(`/tag?id=${id}`);
  }
}
