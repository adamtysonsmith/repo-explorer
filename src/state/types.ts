export type Sort = 'relevance' | 'stars';

export interface State {
  readonly searchQuery: string,
  readonly searchResults: any[];
  readonly totalResultsLength: number;
  readonly noResults: boolean;
  readonly nextPage: number;
  readonly sort: 'relevance' | 'stars';
}

export interface AppendedSearchResults {
  nextSearchResults: any[];
  totalResultsLength: number;
  noResults: boolean;
}
