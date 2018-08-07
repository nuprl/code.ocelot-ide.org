"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crap = function () { return ({
    tokenPostfix: '.js',
    keywords: [
        'boolean', 'break', 'case', 'catch', 'class', 'const', 'continue',
        'delete', 'do', 'else', 'enum', 'extends', 'false', 'final',
        'finally', 'for', 'function', 'if', 'implements', 'import',
        'instanceof', 'interface', 'new', 'package', 'private',
        'public', 'return', 'short', 'static', 'super', 'switch', 'this',
        'throw', 'throws', 'true', 'try', 'typeof', 'void', 'while', 'let'
    ],
    builtins: [],
    operators: [
        '=', '>', '<', '!', '~', '?', ':',
        '==', '<=', '>=', '!=', '&&', '||', '++', '--',
        '+', '-', '*', '/', '&', '|', '^', '%', '<<',
        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
        '^=', '%=', '<<=', '>>=', '>>>='
    ],
    // define our own brackets as '<' and '>' do not match in javascript
    brackets: [
        ['(', ')', 'bracket.parenthesis'],
        ['{', '}', 'bracket.curly'],
        ['[', ']', 'bracket.square']
    ],
    // common regular expressions
    symbols: /[~!@#%\^&*-+=|\\:`<>.?\/]+/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    exponent: /[eE][\-+]?[0-9]+/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    tokenizer: {
        root: [
            // identifiers and keywords
            [/([a-zA-Z_\$][\w\$]*)(\s*)(:?)/, {
                    cases: {
                        '$1@keywords': ['keyword', 'white', 'delimiter'],
                        // this is some black magic I don't understand
                        '$3': ['key.identifier', 'white', 'delimiter'],
                        '$1@builtins': ['predefined.identifier', 'white', 'delimiter'],
                        '@default': ['identifier', 'white', 'delimiter']
                    }
                }],
            // whitespace
            { include: '@whitespace' },
            // regular expression: ensure it is terminated before beginning (otherwise it is an opeator)
            [/\/(?=([^\\\/]|\\.)+\/)/, { token: 'regexp.slash', bracket: '@open', next: '@regexp' }],
            // delimiters and operators
            [/[{}()\[\]]/, '@brackets'],
            [/[;,.]/, 'delimiter'],
            [/@symbols/, {
                    cases: {
                        '@operators': 'operator',
                        '@default': ''
                    }
                }],
            // numbers
            [/\d+\.\d*(@exponent)?/, 'number.float'],
            [/\.\d+(@exponent)?/, 'number.float'],
            [/\d+@exponent/, 'number.float'],
            [/0[xX][\da-fA-F]+/, 'number.hex'],
            [/0[0-7]+/, 'number.octal'],
            [/\d+/, 'number'],
            // strings: recover on non-terminated strings
            [/"([^"\\]|\\.)*$/, 'string.invalid'],
            [/'([^'\\]|\\.)*$/, 'string.invalid'],
            [/"/, 'string', '@string."'],
            [/'/, 'string', '@string.\''],
        ],
        whitespace: [
            [/[ \t\r\n]+/, 'white'],
            [/\/\*/, 'comment', '@comment'],
            [/\/\/.*$/, 'comment'],
        ],
        comment: [
            [/[^\/*]+/, 'comment'],
            [/\/\*/, 'comment.invalid'],
            ['\\*/', 'comment', '@pop'],
            [/[\/*]/, 'comment']
        ],
        string: [
            [/[^\\"']+/, 'string'],
            [/@escapes/, 'string.escape'],
            [/\\./, 'string.escape.invalid'],
            [/["']/, {
                    cases: {
                        '$#==$S2': { token: 'string', next: '@pop' },
                        '@default': 'string'
                    }
                }]
        ],
        // We match regular expression quite precisely
        regexp: [
            [/(\{)(\d+(?:,\d*)?)(\})/, ['@brackets.regexp.escape.control',
                    'regexp.escape.control',
                    '@brackets.regexp.escape.control']],
            [/(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/, ['@brackets.regexp.escape.control',
                    { token: 'regexp.escape.control', next: '@regexrange' }]],
            [/(\()(\?:|\?=|\?!)/, ['@brackets.regexp.escape.control', 'regexp.escape.control']],
            [/[()]/, '@brackets.regexp.escape.control'],
            [/@regexpctl/, 'regexp.escape.control'],
            [/[^\\\/]/, 'regexp'],
            [/@regexpesc/, 'regexp.escape'],
            [/\\\./, 'regexp.invalid'],
            ['/', { token: 'regexp.slash', bracket: '@close' }, '@pop'],
        ],
        regexrange: [
            [/-/, 'regexp.escape.control'],
            [/\^/, 'regexp.invalid'],
            [/@regexpesc/, 'regexp.escape'],
            [/[^\]]/, 'regexp'],
            [/\]/, '@brackets.regexp.escape.control', '@pop'],
        ],
    },
}); };
exports.default = crap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWpzSGlnaGxpZ2h0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29udGFpbmVycy9Db2RlRWRpdG9yL2VsZW1qc0hpZ2hsaWdodGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxJQUFJLEdBQUcsY0FBVyxPQUFBLENBQUM7SUFDckIsWUFBWSxFQUFFLEtBQUs7SUFFbkIsUUFBUSxFQUFFO1FBQ04sU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVTtRQUNqRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPO1FBQzNELFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUTtRQUMxRCxZQUFZLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUztRQUN0RCxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNO1FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLO0tBQ3JFO0lBRUQsUUFBUSxFQUFFLEVBQUU7SUFFWixTQUFTLEVBQUU7UUFDUCxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ2pDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFB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