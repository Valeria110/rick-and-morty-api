import { IChar } from "./char.entity";

const BASE_URL = "https://rickandmortyapi.com/api";

interface IRes {
  info: {
    count: string;
    pages: number;
    next: string;
    prev: string | null;
  };

  results: IChar[];
}

class APIService {
  constructor() {}

  private async getAllCharacters(): Promise<{
    success: boolean;
    result: IChar[] | string;
  }> {
    try {
      const res = await fetch(`${BASE_URL}/character`);
      if (!res.ok) {
        const errMessage = await res.json();
        return { success: false, result: errMessage };
      }

      const data: IRes = await res.json();
      return { success: true, result: data.results };
    } catch (e) {
      return { success: false, result: `${e}` };
    }
  }

  async getCharacterByName(name: string) {
    try {
      const allCharacters = await this.getAllCharacters();
      if (allCharacters.success && Array.isArray(allCharacters.result)) {
        const filteredCharacters = allCharacters.result.filter((char) =>
          char.name.toLowerCase().includes(name.toLowerCase())
        );
        return { success: true, result: filteredCharacters };
      } else {
        return { success: false, result: allCharacters.result };
      }
    } catch (e) {
      return { success: false, result: `${e}` };
    }
  }
}

export const apiService = new APIService();
