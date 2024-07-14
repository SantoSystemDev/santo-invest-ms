export interface Service<TResponseDto> {
  execute(...args: any[]): Promise<TResponseDto | void>;
}
