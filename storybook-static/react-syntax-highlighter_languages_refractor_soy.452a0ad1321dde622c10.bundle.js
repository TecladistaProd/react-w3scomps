(window.webpackJsonp=window.webpackJsonp||[]).push([[129,81],{658:function(module,exports,__webpack_require__){"use strict";function markupTemplating(Prism){!function(Prism){function getPlaceholder(language,index){return"___"+language.toUpperCase()+index+"___"}Object.defineProperties(Prism.languages["markup-templating"]={},{buildPlaceholders:{value:function(env,language,placeholderPattern,replaceFilter){if(env.language===language){var tokenStack=env.tokenStack=[];env.code=env.code.replace(placeholderPattern,(function(match){if("function"==typeof replaceFilter&&!replaceFilter(match))return match;for(var placeholder,i=tokenStack.length;-1!==env.code.indexOf(placeholder=getPlaceholder(language,i));)++i;return tokenStack[i]=match,placeholder})),env.grammar=Prism.languages.markup}}},tokenizePlaceholders:{value:function(env,language){if(env.language===language&&env.tokenStack){env.grammar=Prism.languages[language];var j=0,keys=Object.keys(env.tokenStack);!function walkTokens(tokens){for(var i=0;i<tokens.length&&!(j>=keys.length);i++){var token=tokens[i];if("string"==typeof token||token.content&&"string"==typeof token.content){var k=keys[j],t=env.tokenStack[k],s="string"==typeof token?token:token.content,placeholder=getPlaceholder(language,k),index=s.indexOf(placeholder);if(index>-1){++j;var before=s.substring(0,index),middle=new Prism.Token(language,Prism.tokenize(t,env.grammar),"language-"+language,t),after=s.substring(index+placeholder.length),replacement=[];before&&replacement.push.apply(replacement,walkTokens([before])),replacement.push(middle),after&&replacement.push.apply(replacement,walkTokens([after])),"string"==typeof token?tokens.splice.apply(tokens,[i,1].concat(replacement)):token.content=replacement}}else token.content&&walkTokens(token.content)}return tokens}(env.tokens)}}}})}(Prism)}module.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]},821:function(module,exports,__webpack_require__){"use strict";var refractorMarkupTemplating=__webpack_require__(658);function soy(Prism){Prism.register(refractorMarkupTemplating),function(Prism){var stringPattern=/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,numberPattern=/\b\d+(?:\.\d+)?(?:[eE][+-]?\d+)?\b|\b0x[\dA-F]+\b/;Prism.languages.soy={comment:[/\/\*[\s\S]*?\*\//,{pattern:/(\s)\/\/.*/,lookbehind:!0,greedy:!0}],"command-arg":{pattern:/({+\/?\s*(?:alias|call|delcall|delpackage|deltemplate|namespace|template)\s+)\.?[\w.]+/,lookbehind:!0,alias:"string",inside:{punctuation:/\./}},parameter:{pattern:/({+\/?\s*@?param\??\s+)\.?[\w.]+/,lookbehind:!0,alias:"variable"},keyword:[{pattern:/({+\/?[^\S\r\n]*)(?:\\[nrt]|alias|call|case|css|default|delcall|delpackage|deltemplate|else(?:if)?|fallbackmsg|for(?:each)?|if(?:empty)?|lb|let|literal|msg|namespace|nil|@?param\??|rb|sp|switch|template|xid)/,lookbehind:!0},/\b(?:any|as|attributes|bool|css|float|in|int|js|html|list|map|null|number|string|uri)\b/],delimiter:{pattern:/^{+\/?|\/?}+$/,alias:"punctuation"},property:/\w+(?==)/,variable:{pattern:/\$[^\W\d]\w*(?:\??(?:\.\w+|\[[^\]]+]))*/,inside:{string:{pattern:stringPattern,greedy:!0},number:numberPattern,punctuation:/[\[\].?]/}},string:{pattern:stringPattern,greedy:!0},function:[/\w+(?=\()/,{pattern:/(\|[^\S\r\n]*)\w+/,lookbehind:!0}],boolean:/\b(?:true|false)\b/,number:numberPattern,operator:/\?:?|<=?|>=?|==?|!=|[+*/%-]|\b(?:and|not|or)\b/,punctuation:/[{}()\[\]|.,:]/},Prism.hooks.add("before-tokenize",(function(env){var soyLitteralMode=!1;Prism.languages["markup-templating"].buildPlaceholders(env,"soy",/{{.+?}}|{.+?}|\s\/\/.*|\/\*[\s\S]*?\*\//g,(function(match){return"{/literal}"===match&&(soyLitteralMode=!1),!soyLitteralMode&&("{literal}"===match&&(soyLitteralMode=!0),!0)}))})),Prism.hooks.add("after-tokenize",(function(env){Prism.languages["markup-templating"].tokenizePlaceholders(env,"soy")}))}(Prism)}module.exports=soy,soy.displayName="soy",soy.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_soy.452a0ad1321dde622c10.bundle.js.map