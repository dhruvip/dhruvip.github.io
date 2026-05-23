---
title: Code Review Guidelines
sidebar_label: Code Review Guidelines
slug: /code-review-guidelines
keywords: [tbd]
description: tbd
tags: 
    - ML
---
4 simple rules:
- Only block a Pr if it needs YOUR review
- Show, dont tell: dont waste unnecessary time in describing the changes, when you can just write a small snippet
- Give critical feedback on Call: writing 5 para feedback gets ego involved
- Review the big picture first: focus on high level feature, api, functionality- testcases can be re-written

code review Checklist:
- Understand the purpose
- Focus on readability
- Check adherance to language convention
- performance and scalability
- error handling and logging
- security considerations
- test coverage
  
Approval best practices:
- have a PR template- with description; screenshots; how to test it
- Pr > 500 lines- break it 
- certain principles like SOLID, DRY, Clean Code should be followed
- 