import { ISearchItem } from './search-item.model';

export interface ISearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number | string;
    resultsPerPage: number | string;
  };
  items: ISearchItem[];
}
