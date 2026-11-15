import {spawnSync} from 'node:child_process';
for(const level of ['easy','normal','hard']){const run=spawnSync(process.execPath,['journey.mjs'],{env:{...process.env,LUMO_LEVEL:level},stdio:'inherit'});if(run.status!==0)process.exit(run.status??1)}
