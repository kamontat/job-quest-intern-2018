# TakeMeTour Internship Program 2018

Hi all applicants! Welcome to TakeMeTour Internship Program 2018. Being and intern at TakeMeTour is challenging so we have challenges for you! These challenges are designed to assess your learning skill, which is the fundamental and most important skill of great software developer. So I do not expect you to have full or any knowledge about the topic beforehand but it's your job to try to learn and answer those challenges.

## Algorithm in Javascript

Code must be writes in Javascript language. The code will be tested with Node8, so you can use all Javascript features that equivalent to Node8.

1. Write a function that shift the elements of array to left or right by n elements in infinity loop. the function receive 3 parameters, 1st is an array, 2nd the is direction ('left' or 'right'), 3rd is the number of elements will be shifted. For example,

```js
> shift(['john', 'jane', 'sarah', 'alex'], 'left', 2)
['sarah', 'alex', 'john', 'jane']

> shift([1, 2, 3, 4 ,5], 'right', 3)
[3, 4, 5, 1, 2]
```

### Answer-1

- This exercise code is on [exercise-1](./exercise-1) folder.
- This javascript code is on [algorithm](./exercise-1/algorithm.js) file.
- This also provide CLI command, run via `node index.js <arr> --type right --number 3` or `node index.js --help` for help command.
- This also have test-case on [algorithm.test](./exercise-1/algorithm.test.js) file, that can run by `npm test` or `npm run test:watch`

```js
// reverse type if input number exceed mid of array
const _rev = (type, number, mid, length) => {
    let a = number;
    if (type == "right" && number < mid) {
        a = length - number
        type = "left"
    } else if (type == "left" && number > mid) {
        a = length - number
        type = "right"
    }
    return {
        "type": type,
        "number": a
    };
}

// shift to the left
const _shift_left = (arr, number) => {
    let a = [];
    for (let i = 0; i < number; i++) {
        a.push(arr.shift());
    }
    a.forEach(element => {
        arr.push(element);
    });
    return arr;
}

// shift to the right
const _shift_right = (arr, number) => {
    let a = [];
    for (let i = 0; i < number; i++) {
        a.push(arr.pop());
    }

    a.forEach(element => {
        arr.unshift(element);
    });
    return arr;
}

// main method
const _shift = (arr = [], type, number) => {
    const length = arr.length
    number = number % length
    mid = length / 2
    if (number == 0) return arr
    // optimized time
    const t = _rev(type, number, mid, length);
    type = t.type
    number = t.number
    // end
    return type === "right" ? _shift_right(arr, number) : _shift_left(arr, number);
}
```

1. Download [hero.json](https://github.com/takemetour/job-quest-intern-2018/blob/master/hero.json) and write a code to calculate these values from **hero.json**
- 2.1 Average **networth** of all heroes
- 2.2 Average **level** for hero that has 'intelligent' as **primary_attribute**
- 2.3 Find the hero who got the most **assist**
- 2.4 Find the hero who got the worst **kill/death ratio** (ratio = kill/death)

### Answer-2

This code below is raw code for each of problem. If you want to see the optimize code, please go to [exercise-2](./exercise-2) folder.

```js
const hero = require("./hero.json");
// 2.1
const a = hero.reduce((p, c) => {
    if (p instanceof Number) return Number(c.networth);
    return p + Number(c.networth);
}, 0) / hero.length;
// 2.2
const _b = hero.filter(h => h.primary_attribute === "intelligent");
const b = _b.reduce((p, c) => {
    if (p instanceof Number) return Number(c.level);
    return p + Number(c.level);
}, 0) / _b.length;
// 2.3
const c = hero.reduce((p, c) => {
    if (!p) return c;
    if (p.assist > c.assist) return p;
    else return c;
});
// 2.4
const d = hero.reduce((p, c) => {
    if (!p) return c;
    const kd1 = p.kill / p.death;
    const kd2 = c.kill / c.death;
    if (kd1 > kd2) return c;
    else return p;
});

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

## Simple Web Application: A joke from Chuck Norris

This part of quest will be a challenging one. You are going to make a simple web application which allow users to get some joke from **Chuck Norris** himself.

> Chuck Norris once ordered a Big Mac at Burger King, and got one.

### Features

- Users can get a joke from [Chuck Norris API](http://www.icndb.com/api/)
- Users has options to change number of result jokes, user's first name and last name
- UI Design as you wish.

### Technical description

- Using data from [REST API](http://www.icndb.com/api/)
- Any tools & framework is allowed.
- If you are using tools & framework which is same as our tech stack (React, Redux, styled-components, recompose etc.) will be a plus.
- Any extra feature will be a plus.

## Questions

Q1: What is GraphQL and how it is different from REST API?

A1: The pain point of REST APIs is it need to have `endpoint` of each API and each of them might return unused data so that make request overprice and overload, there also have second way to use RESTful with action body, for example

```
HTTP https://xx.yy/api POST
{
    "action": "getUser",
    ...
}
```

So facebook introduce new way to create APIs using `GraphQL`, instead of create APIs in each of action for client to managing backend, `GraphQL` will provide path so that client can query getting only data whatever they want.

Q2: Please explain how javascript benefits from cross-platform development

A2: Cross-platform occur because the pain point for mobile development. In the previous development, we need to hire at least 2 expert mobile development in both iOS and Android environment. Cross-platform will created by many of company but the largest society, I think is should be `react-native`. and as it names `react` so it mean create by facebook and the language for development is `javascript` so nowadays javascript language is one of the most valuable language in computer because it can develop in many platform like **frontend** using react/angular/vue, **backend** as nodeJS, **mobile** as react-native, and so on.

Q3: What do you expect to get from during an internship at TakeMeTour?

A3: Improve my Backend skill including security, database, and optimize code. The correct way to use payment library, caching in web server, and so on. Connection is also my priority that I want to gain in your company.

## Submitting

Please fork this repository and submit your repository at `jet@takemetour.com` along with your contact information.

Note: These challenges must be done by yourself. There is no benefit for both sides if the answer do not reflect your true skill.
