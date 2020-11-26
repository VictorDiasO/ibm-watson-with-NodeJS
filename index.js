const readline = require('readline-sync');
const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = {};
    
    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    await robots.text(content);

    function askAndReturnSearchTerm() {
        return readline.question('Search term: ');
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The hitory of'];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Chose one option: ');
        const selectedPrefixText = prefixes[selectedPrefixIndex];

        return selectedPrefixText;
    }

    // console.log(content);
}

start();