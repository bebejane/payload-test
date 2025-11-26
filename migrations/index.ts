import * as migration_20251126_100705_migration from './20251126_100705_migration';
import * as migration_20251126_100945_migration from './20251126_100945_migration';

export const migrations = [
  {
    up: migration_20251126_100705_migration.up,
    down: migration_20251126_100705_migration.down,
    name: '20251126_100705_migration',
  },
  {
    up: migration_20251126_100945_migration.up,
    down: migration_20251126_100945_migration.down,
    name: '20251126_100945_migration'
  },
];
