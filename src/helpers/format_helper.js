const format_currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
  
const text_limit = (str) => {
    var text = str;
    var word_size = str.length;

    if (word_size > 50) {
        text = str.substring(0, 45) + ' ...'
    }

    return text;
}

export { format_currency, text_limit }