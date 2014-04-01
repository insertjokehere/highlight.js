/*
Language: Puppet
*/
//Based off http://downloads.puppetlabs.com/puppet/puppet.vim
function (hljs) {
    var DEFINE = {
	beginKeywords:'class define node',
	end: '{',
	className: 'function'
    }
    return {
	case_insensitive: false,
	
	aliases: ['pp'],
	keywords: {
	    keyword: 'and default in import or unless',
	    literal: 'false true undef',
	},
	
	contains: [hljs.HASH_COMMENT_MODE, DEFINE]
    }
}
