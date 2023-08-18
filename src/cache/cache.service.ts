import NodeCache from 'node-cache';

export class CacheService {
  private readonly cache: NodeCache;

  constructor() {
    this.cache = new NodeCache();
  }

  get(key: string): string | undefined {
    return this.cache.get(key);
  }

  set(key: string, value: string): boolean {
    return this.cache.set(key, value);
  }
}
