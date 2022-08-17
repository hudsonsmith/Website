---
title: How to study for quizzes with python.
description: A blog post about a little program I write to study for quizzes.
date: 2022-02-16
tags:
  - Python
layout: layouts/post.njk
---
## How to study for quizzes with python.


Recently I have found myself in need to study for quizzes in a short, flashcard like manner.

Being a programmer, I decided to solve this problem with code.

Below is the program I wrote to study for tests:

```python
from random import choice
from os import system

questions = {
    "homozygous dominant": "When a genotype has two identical dominate alleles.",
    "homozygous recessive": "When a genotype has two identical recessive alleles.",
    "heterozygous": "When a genotype has two different alleles.",
    "phenotype": "The way an organism looks or behaves; the observable expression of an allele pair.",
    "genotype": "The allele pairs that an organism has inherited. Usually abbreviated with two letters. ",
    "heredity": "The passing down of traits from parents to offspring.",
    "genetics": "The study of how traits are inherited.",
    "budding": "A type of asexual reproduction in which a new, duplicate plant or animal begins to form at the side of the parent and enlarges until an individual is created. Very common in plants.",
    "sexual reproduction": "When an offspring is produced by combining the genetics for two parents.",
    "asexual reproduction": "When a single parent has an offspring genetically identical to themselves.",
    "punnett square": "A chart that predicts the possible genotypes of offspring.",
    "hybrid": "Heterozygous alleles (one Dominate and one Recessive Allele)",
    "natural selection": "Process by which organisms that inherit helpful traits reproduce more successfully than other organisms do.",
}

score = 0

while True:
    print()
    question = questions.keys()
    answer = choice(list(question)).strip().lower()

    print(f"{questions[answer]}")

    user_input = input("> ")

    if user_input == answer:
        print("\nCorrect.")
        score += 1
    else:
        print(f"\nIncorrect\nAnswer was: {answer}")
        score = 0

    print(f"Score: {score}")
    input("PRESS [ENTER]")
    system("clear")
```

Of course, you should replace the questions dictionary with your own set of questions, and boom you got a quick, free method to study for tests.