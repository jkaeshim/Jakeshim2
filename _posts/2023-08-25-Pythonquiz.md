---
toc: true
comments: false
layout: post
title: Quiz
description: Get 3/3
type: hacks
courses: { compsci: {week: 1} }
---
<style>
<!DOCTYPE html>
<html>
<head>
    <title>Python Quiz</title>
</head>
<body>
    <h1>Python Quiz</h1>
    <form id="quiz-form">
        <fieldset>
            <legend>Question 1: What is Python?</legend>
            <label><input type="radio" name="q1" value="a">A snake</label><br>
            <label><input type="radio" name="q1" value="b">A programming language</label><br>
            <label><input type="radio" name="q1" value="c">A food</label><br>
        </fieldset>
        <fieldset>
            <legend>Question 2: Which one is a Python library for data manipulation?</legend>
            <label><input type="radio" name="q2" value="a">Panda</label><br>
            <label><input type="radio" name="q2" value="b">Zebra</label><br>
            <label><input type="radio" name="q2" value="c">Giraffe</label><br>
        </fieldset>
        <fieldset>
            <legend>Question 3: Python uses which indentation for code blocks?</legend>
            <label><input type="radio" name="q3" value="a">Spaces</label><br>
            <label><input type="radio" name="q3" value="b">Tabs</label><br>
            <label><input type="radio" name="q3" value="c">Both spaces and tabs</label><br>
        </fieldset>
        <button type="button" id="submit-button">Submit Answers</button>
    </form>
    <div id="result"></div>
    <script>
        document.getElementById("submit-button").addEventListener("click", function() {
            const answers = {
                q1: document.querySelector('input[name="q1"]:checked'),
                q2: document.querySelector('input[name="q2"]:checked'),
                q3: document.querySelector('input[name="q3"]:checked')
            };

            let correctCount = 0;
            for (const question in answers) {
                if (answers[question] && answers[question].value === "b") {
                    correctCount++;
                }
            }

            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = `You got ${correctCount} out of 3 questions correct.`;
        });
    </script>
</body>
</html>
