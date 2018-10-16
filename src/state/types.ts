export type Sort = 'relevance' | 'stars';

export interface State {
  readonly searchQuery: string,
  readonly searchResults: any[];
  readonly totalResultsLength: number;
  readonly nextPage: number;
  readonly sort: 'relevance' | 'stars';
}
