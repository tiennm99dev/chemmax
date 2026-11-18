// Synced from tiennm99dev/mathmate by scripts/sync-core.sh. Do not edit it here; change it in mathmate and sync again.
import { defineParams } from '@sveltejs/kit/params';
import { grade } from './grade.js';
import { strand } from './strand.js';

export const params = defineParams({ grade, strand });
