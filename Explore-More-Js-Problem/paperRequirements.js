
function paperRequirements(CopyOfFirstBooks,CopyOfSecondBooks,CopyOfThirdBooks){

    const PaperForFirstBook = 100;
    const PaperForSecondBook = 200;
    const PaperForThirdBook = 300;
    const FirstBookPaperNeeded = CopyOfFirstBooks * PaperForFirstBook;
    const SecondBookPaperNeeded = CopyOfSecondBooks * PaperForSecondBook;
    const ThirdBookPaperNeeded = CopyOfThirdBooks * PaperForThirdBook;
    const TotalRequarement = FirstBookPaperNeeded + SecondBookPaperNeeded + ThirdBookPaperNeeded;
    return TotalRequarement;
}

const PagesINeeded = paperRequirements(5,15,35);
console.log(PagesINeeded);

