function getColumNum(
  wrapElem,
  colMinWidth,
  itemPaddingRight = 10,
  defaultColNum = 5
) {
  if (!wrapElem) {
    return {
      columNum: defaultColNum,
      colWidth: defaultColNum,
    };
  }
  const availableWidth = wrapElem.getBoundingClientRect().width;
  const columNum = Math.floor(
    (availableWidth + itemPaddingRight) / (colMinWidth + itemPaddingRight)
  );
  const colWidth =
    (availableWidth + itemPaddingRight) / columNum - itemPaddingRight;
  return {
    columNum,
    colWidth,
  };
}
