function addPunctuation(sentences) {

  return sentences.replace(/ (?=[A-Z])/g, ". ") + ".";
}
