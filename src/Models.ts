export interface Rate {
  currency: string;
  code: string;
  bid: number;
  ask: number;
}

export interface NBPResponse {
  table: string;
  no: string;
  tradingDate: string;
  effectiveDate: string;
  rates: Rate[];
}
