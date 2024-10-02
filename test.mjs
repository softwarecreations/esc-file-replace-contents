import fs from 'fs';
import os from 'os';
import path from 'path';
// import fileReplaceContents from 'esc-file-replace-contents';
import fileReplaceContents from './main.mjs';

const filePath = path.join(os.tmpdir(), 'test-file.txt');

if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

fileReplaceContents(filePath, 'very\n');

show();

fileReplaceContents(filePath, 'nice module\n');

show();
