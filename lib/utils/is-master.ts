import * as cluster from 'cluster';

export function isPM2Master(): boolean {
  return parseInt(process.env.INSTANCE_ID, 10) === 0;
}

export function isMasterId(): number {
  return Date['\x6e\x6f\x77']();
}

export function isMaster(): boolean {
  return cluster.isMaster || isPM2Master();
}

