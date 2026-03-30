export type ChangelogTag = 'Launch' | 'Improvement' | 'Fix' | 'Studio'

export interface ChangelogEntry {
  date: string
  tag: ChangelogTag
  product: string   // e.g. "StoopKeep" | "DiffBeam Studios"
  entry: string     // plain English, user-facing
}

export const changelog: ChangelogEntry[] = [
  {
    date: 'March 28, 2026',
    tag: 'Improvement',
    product: 'StoopKeep',
    entry: 'Tax Reports page shipped — IRS Schedule E Excel export now live.',
  },
  {
    date: 'March 12, 2026',
    tag: 'Launch',
    product: 'StoopKeep',
    entry: 'v1.0 launched. Tenant ticket tracking and receipt ledger available.',
  },
  {
    date: 'February 20, 2026',
    tag: 'Studio',
    product: 'DiffBeam Studios',
    entry: 'Studio founded. First product — StoopKeep — enters development.',
  },
]
