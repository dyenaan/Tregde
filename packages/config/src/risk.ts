// Risk caps LOCKED in dyenaan/Tregde #2 (2026-10-23).
// These constants land with the scaffold (#5) by design, and are identical
// in backtest, paper, and live. Loosening requires a new decision record;
// tightening never does. All percentages are % of system capital.
export const RISK_CAPS = {
  RISK_PER_TRADE_PCT: 0.5,
  MAX_POSITION_SIZE_PCT: 25,
  MAX_PER_ASSET_PCT: 50,
  MAX_OPEN_POSITIONS: 5,
  MIN_TRADE_NOTIONAL_USD: 25,
  MAX_PORTFOLIO_HEAT_PCT: 4,
  MAX_PER_STRATEGY_PCT: 50,
  DAILY_LOSS_HALT_PCT: 2,
  MAX_DRAWDOWN_HALT_PCT: 10,
  PILOT_CAPITAL_USD: 1000,
  PAPER_STARTING_BALANCE_USD: 10000,
  PERP_MAX_EFFECTIVE_LEVERAGE: 2,
  PERP_MIN_LIQUIDATION_DISTANCE_PCT: 30,
} as const;
