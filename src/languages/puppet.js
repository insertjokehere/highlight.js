/*
Language: Puppet
*/
function (hljs) {
    var VAR = {
	begin: /$\w+/
    }
    var VAR_REPLACE = {
	begin: /\$\{\w+\}/,
	relevance: 10,
	className: 'variable'
    }

    var STRING = {
	className: 'string',
	variants: [
	    {
		begin: /"/,
		end: /"/,
		contains: [VAR_REPLACE],
	    },
	    hljs.APOS_STRING_MODE
	]
    }

    var REFERENCE = {
	begin: /[A-Z][a-z_]+(::|[A-Z][a-z_]+)*\s*\[/,
	end: /\]/,
	contains: [STRING],
	className: 'reference'
    }

    var RESOURCE_PARAM = {
	className: 'param',
	begin: /[a-z_\-]+\s*[=+]\>[a-z_\-]+/
    }

    var RESOURCE = {
	className: 'resource',
	variants: [
	    {
		begin: /[a-z_]+(::|[a-z_]+)*\s*\{/,
		end: /\}/,
		contains: [STRING, RESOURCE_PARAM]
	    },
	    REFERENCE
	],
    }

    var PARAM_LIST = {
	begin: /\(/,
	end: /\)/,
	contains: [VAR],
	className: 'params'
    }

    var DEFINE = {
	beginKeywords: 'class define',
	className: 'class',
	contains: [PARAM_LIST]
    }

    return {
	case_insensitive: false,
	
	aliases: ['pp'],
	keywords: {
	    keyword: 'and default in import or unless present absent node if',
	    literal: 'false true undef',
	},
	
	contains: [hljs.HASH_COMMENT_MODE, STRING, VAR, RESOURCE, DEFINE]
    }
}
