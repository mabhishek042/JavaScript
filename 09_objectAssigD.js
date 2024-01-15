let professor = {
  Name: "Siddharth Raghvan",
  Age: 42,
  Occupation: "Philosopher",
  Department: "Indian Philosophy",
  College: "JNU Delhi",

  degrees: {
    MasterDegree: "Philosophy",
    PHD: "Western Philosphy & Indian Philosophy",
    BacholerDegree: "BA in Philosophy",
    College: "Pune University",
    certificates: [
      "Hacker Rank Participation",
      "Certificate in IFE course",
      "Certificate in Adv Programming",
    ],
  },
};
professor.totalExperience = "14 years";
console.log(`First all Properties :- `);
console.log(professor);
console.log(``);
console.log(`Nested Properties :- `);
console.log(professor.degrees);
console.log(``);
console.log(`Array Property :- `);
console.log(professor.degrees.certificates);
console.log(
  "============================================================================================================="
);
console.log(`Before Change property :- `);
console.log(professor.degrees);
console.log(``);
professor.degrees.College = "Mumbai University"; /*value updated*/
console.log(`after Change of Degree's object college property :- `);
console.log(professor.degrees);
console.log(``);
console.log(
  "============================================================================================================="
);
console.log(``);
console.log(`before add new Certificate value :- `);
console.log(professor.degrees.certificates);
console.log(``);
professor.degrees.certificates.splice(2, 0, "Oracle Certified");
console.log(`After add new Certificate value at index 2 :- `);
console.log(professor.degrees.certificates);
console.log(``);
console.log(
  "============================================================================================================="
);
console.log(``);
let result =
  professor.degrees.certificates[professor.degrees.certificates.length - 1];
console.log(`last element of the array in certificates is :- ${result}`);
console.log(``);
console.log(
  "============================================================================================================="
);
console.log(``);
console.log(`Complete object is :- `);
console.log(``);
console.log(professor);
console.log(``);
console.log(professor.degrees);
console.log(``);
console.log(professor.degrees.certificates);
console.log(
  "============================================================================================================="
);
console.log(``);
console.log(`Traverse array certificates using loop :- `);
console.log(``);
for (const i in professor.degrees.certificates) {
  if (Object.hasOwnProperty.call(professor.degrees.certificates, i)) {
    const element = professor.degrees.certificates[i];

    console.log(`Key ==> ${i}, Value ==> ${element}`);
  }
}
console.log(``);
console.log(
  "========================================== End ==================================================================="
);
