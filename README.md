# esc-file-replace-contents
Replace file contents if file does not already contain the same content.

Basically a SSD/flash friendly writeFileSync with some default colored console.log's that you can easily over-ride or eliminate.

## Installation
`npm install esc-file-replace-contents`

## Example
```JavaScript
import fileReplaceContents from 'esc-file-replace-substring';

// see test.mjs for boilerplate

const show = () => console.log('---\n' + fs.readFileSync(filePath) + '---');

fileReplaceContents(filePath, 'very\n');

show();

fileReplaceContents(filePath, 'nice module\n');

show();
```
![image](https://github.com/user-attachments/assets/fad8a1d6-a109-4617-ad61-fd99acd16eed)

## Project goals
* No external dependencies
* No nonsense
* Reliable, no radical changes will ever happen.
* Small, simple, easy to audit, yourself

If I have ideas for something different, I'll make a new package rather than make breaking changes.

## See also
* esc-file-replace-substring
* esc-file-replace-substring-between-comments
* esc-read-file-without-comments
* esc-get-data-from-json-file

## Notes
Have fun!

### Say thanks
Star the repo
https://github.com/softwarecreations/esc-file-replace-contents

### PR's or issues
Welcome

### License
MIT
