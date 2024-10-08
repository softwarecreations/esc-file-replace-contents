# esc-file-replace-contents
Replace file contents if file does not already contain the same content.

Basically a SSD/flash friendly writeFileSync with some default colored console.log's that you can easily over-ride or eliminate.

## Installation
`npm install esc-file-replace-contents`

## Example
```JavaScript
import fileReplaceContents from 'esc-file-replace-contents';

// see test.mjs for boilerplate

const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

fileReplaceContents(filePath, 'very\n');

show();

fileReplaceContents(filePath, 'nice module\n');

show();
```
![image](https://github.com/user-attachments/assets/fad8a1d6-a109-4617-ad61-fd99acd16eed)

## console.log override-able
Pass in your own logging functions for
* Created
* Updated
* No change (disabled by default)

## Project goals
* No external dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## See also
* https://www.npmjs.com/package/esc-file-replace-substring
* https://www.npmjs.com/package/esc-file-replace-substring-between-comments
* https://www.npmjs.com/package/esc-read-file-without-comments
* https://www.npmjs.com/package/esc-get-data-from-json-file

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-file-replace-contents

### PR's or issues
Welcome

### License
MIT
