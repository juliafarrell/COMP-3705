/**
 * Created by juliafarrell on 6/27/17.
 */

class lab3
{
   // 1. testDefaultParameters
  testDefaultParameters(a, b = 100) {
    return { first: a, second: b };
  }

   // 2. testTemplateLiterals
  testTemplateLiterals(firstName, middleName, lastName) {
    return `${firstName}, ${middleName}, ${lastName}`;
  }

   // 3. testMultilineStrings
  testMultilineStrings() {
    return `This is really neat
      multiline strings 5ever
      ES6 feature
      :a haiku`;
  }

   // 4. testSortWithArrowFunction
  testSortWithArrowFunction(arr) {
    return arr.sort((a, b) => b - a);
  }

}

export { lab3 };
