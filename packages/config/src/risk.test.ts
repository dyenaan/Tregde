import { describe, expect, it } from 'vitest';
import { RISK_CAPS } from './risk';

describe('RISK_CAPS (locked in #2)', () => {
  it('matches the locked values', () => {
    expect(RISK_CAPS.RISK_PER_TRADE_PCT).toBe(0.5);
    expect(RISK_CAPS.MAX_DRAWDOWN_HALT_PCT).toBe(10);
    expect(RISK_CAPS.DAILY_LOSS_HALT_PCT).toBe(2);
    expect(RISK_CAPS.PERP_MAX_EFFECTIVE_LEVERAGE).toBe(2);
    expect(RISK_CAPS.PILOT_CAPITAL_USD).toBe(1000);
    expect(RISK_CAPS.PAPER_STARTING_BALANCE_USD).toBe(10000);
  });
});
