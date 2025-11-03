function getElementWidth (content, padding, border){
    const contentValue = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const totalWidth = contentValue + (paddingValue * 2) + (borderValue * 2);
    // const totalWidth = content + padding  + border ;
    return `${totalWidth}px`
}
console.log(getElementWidth("50px", "8px", "4px")); // 74px
console.log(getElementWidth("60px", "12px", "8.5px")); // 101px
console.log(getElementWidth("200px", "0px", "0px")); // 200px
