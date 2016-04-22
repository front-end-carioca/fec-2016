export const cleanSpecialChars = (string, whitespace, lowercase) => {
  if(!whitespace) { whitespace = true; }
  if(!lowercase) { lowercase = true; }

  var new_text = string;
  new_text = new_text.replace(/[áàâãä]/gi, "a");
  new_text = new_text.replace(/[ÁÀÂÃÄ]/gi, "A");
  new_text = new_text.replace(/[éèê]/gi, "e");
  new_text = new_text.replace(/[ÉÈÊ]/gi, "E");
  new_text = new_text.replace(/[íì]/gi, "i");
  new_text = new_text.replace(/[ÍÌ]/gi, "I");
  new_text = new_text.replace(/[óòôõö]/gi, "o");
  new_text = new_text.replace(/[ÓÒÔÕÖ]/gi, "O");
  new_text = new_text.replace(/[úùü]/gi, "u");
  new_text = new_text.replace(/[ÚÙÜ]/gi, "U");
  new_text = new_text.replace(/ç/gi, "c");
  new_text = new_text.replace(/Ç/gi, "C");
  new_text = new_text.replace(/[\]\[\>\<\}\{\)\(\:\;\,\!\?\*\%\~\^\`\&\#\@]/gi, "");
  if(whitespace) { new_text = new_text.replace(/[\s]/gi, "-"); }
  if(lowercase) { new_text = new_text.toLowerCase(); }

  return new_text;
};