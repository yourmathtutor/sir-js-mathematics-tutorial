
// ==========================================
// SIR J'S MATHEMATICS TUTORIAL
// MATHEMATICS Q&A LIBRARY
// ==========================================

const mathQuestions = [

  {
    id: 1,
    grade: "Grade 6",
    topic: "Fractions",
    title: "How do we add fractions with unlike denominators?",

    question: "Find the sum of 1/3 and 1/4.",

    steps: [
      "Find the least common denominator (LCD) of 3 and 4. The LCD is 12.",
      "Convert both fractions into equivalent fractions: 1/3 = 4/12 and 1/4 = 3/12.",
      "Add the numerators while keeping the denominator: 4/12 + 3/12 = 7/12."
    ],

    answer: "7/12",

    concept: "To add fractions with unlike denominators, first express them using a common denominator. Then add their numerators."
  },

  {
    id: 2,
    grade: "Grade 7",
    topic: "Integers",
    title: "Why does a negative number multiplied by another negative number become positive?",

    question: "Evaluate (-3) × (-4).",

    steps: [
      "Recall that multiplying a positive number by a negative number gives a negative product.",
      "Observe the pattern: (-3) × 4 = -12, (-3) × 3 = -9, (-3) × 2 = -6, and (-3) × 1 = -3.",
      "As the second factor decreases by 1, the product increases by 3.",
      "Continuing the pattern, (-3) × 0 = 0 and (-3) × (-1) = 3.",
      "Therefore, (-3) × (-4) = 12."
    ],

    answer: "12",

    concept: "The product of two negative integers is positive. This rule is consistent with the patterns of multiplication and the distributive property."
  },

  {
    id: 3,
    grade: "Grade 8",
    topic: "Algebra",
    title: "How do we solve a linear equation in one variable?",

    question: "Solve: 3x + 7 = 22.",

    steps: [
      "Subtract 7 from both sides: 3x + 7 - 7 = 22 - 7.",
      "Simplify: 3x = 15.",
      "Divide both sides by 3: x = 15/3.",
      "Simplify to obtain x = 5."
    ],

    answer: "x = 5",

    concept: "An equation remains balanced when the same operation is performed on both sides. Use inverse operations to isolate the variable."
  },

  {
    id: 4,
    grade: "Grade 9",
    topic: "Geometry",
    title: "How do we determine the missing angle of a triangle?",

    question: "A triangle has two angles measuring 48° and 67°. Find its third angle.",

    steps: [
      "Recall that the sum of the interior angles of a triangle is 180°.",
      "Let x represent the missing angle.",
      "Write the equation: 48° + 67° + x = 180°.",
      "Combine the known angles: 115° + x = 180°.",
      "Subtract 115° from both sides: x = 65°."
    ],

    answer: "65°",

    concept: "The sum of the three interior angles of any triangle is always 180°."
  },

  {
    id: 5,
    grade: "Grade 10",
    topic: "Quadratic Equations",
    title: "How do we solve quadratic equations using factoring?",

    question: "Solve: x² - 5x + 6 = 0.",

    steps: [
      "Identify two numbers whose product is 6 and whose sum is -5.",
      "The two numbers are -2 and -3.",
      "Factor the quadratic expression: (x - 2)(x - 3) = 0.",
      "Apply the zero-product property: x - 2 = 0 or x - 3 = 0.",
      "Solve each equation: x = 2 or x = 3."
    ],

    answer: "x = 2 or x = 3",

    concept: "The zero-product property states that if the product of two factors is zero, at least one of the factors must be zero."
  }, 
  
  {
    id: 6,
    grade: "Junior High School",
    topic: "Algebra",
    title: "How do we solve the equation 2x + 5 = 17?",

    question: "Solve: 2x + 5 = 17.",

    steps: [
      "Start with the given equation: 2x + 5 = 17.",
      "Subtract 5 from both sides: 2x = 17 - 5.",
      "Simplify: 2x = 12.",
      "Divide both sides by 2: x = 12/2.",
      "Therefore, x = 6.",
      "Check: 2(6) + 5 = 17, so the solution is correct."
    ],

    answer: "x = 6",

    concept: "Use inverse operations to isolate the variable while maintaining equality. Verify the answer by substituting it into the original equation."
  }


]; 
