// Synced from tiennm99dev/toantot by scripts/sync-core.sh. Do not edit it here; change it in toantot and sync again.
import * as siteCopy from './site.vi.js';

const locales = { vi: siteCopy };
const defaultLocale = 'vi';

/** Site-wide chrome copy for the default locale. */
export function t() {
  return locales[defaultLocale];
}
