import { HttpService } from '@/services/global';

export class CategoryService {
  static async findOne(id: string) {
    return await HttpService.get(`/category/${id}`);
  }

  static async findAll(filter: string = '', category: string = '') {
    return await HttpService.get(`/category?name=${filter}&status=${category}`);
  }

  static async createOne(category: any) {
    return await HttpService.post('/category', category);
  }

  static async updateOne(id: string, category: any) {
    return await HttpService.put(`/category?id=${id}`, category);
  }

  static async deleteOne(id: string) {
    return await HttpService.delete(`/category?id=${id}`);
  }
}
