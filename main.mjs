'use strict';
import colors from 'esc-colors';
import fs from 'fs';

export const fileReplaceContents = (
  path,
  contents,
  existsLogF    = s => console.log(colors.magenta(s)),
  createLogF    = s => console.log(colors.blue(s)),
  unchangedLogF = s => console.log(colors.yellow(s)),
) => {
	const exists = fs.existsSync(path);
	const oldBuf = exists ? fs.readFileSync(path).toString() : '';
	if (exists && oldBuf===contents || oldBuf.replace(/# updated[^\n]+/,'')===contents.replace(/# updated[^\n]+/,'')) {
		if (unchangedLogF) unchangedLogF(`No change to ${path}`);
		return false;
	}
	fs.writeFileSync(path, contents);
  const logF = exists ? existsLogF : createLogF;
  if (logF) logF(`${exists?`Replaced ${oldBuf.length} bytes`:'Created'} file with ${contents.length} bytes: ${path}`);
	return true;
};

export default fileReplaceContents;
