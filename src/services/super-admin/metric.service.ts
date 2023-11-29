import { HttpService } from '@/services/global';

export class MetricService {
  static async findOne(id: string) {
    return await HttpService.get(`/metric/${id}`);
  }

  static async findAll(filter: string = '', category: string = '') {
    return await HttpService.get(`/metric?name=${filter}&status=${category}`);
  }

  static async createOne(metric: any) {
    return await HttpService.post('/metric', metric);
  }

  static async updateOne(id: string, metric: any) {
    return await HttpService.put(`/metric?id=${id}`, metric);
  }

  static async deleteOne(id: string) {
    return await HttpService.delete(`/metric?id=${id}`);
  }
}
