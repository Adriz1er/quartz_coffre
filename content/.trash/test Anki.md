1.  `This is a {cloze} note with {two clozes}` -> `This is a {{c1::cloze}} note with {{c2::two clozes}}`
2.  `This is a {2:cloze} note with {1:id syntax}` -> `This is a {{c2::cloze}} note with {{c1::id syntax}}`
3.  `This is a {2|cloze} {3|note} with {1|alternate id syntax}` -> `This is a {{c2::cloze}} {{c3::note}} with {{c1::alternate id syntax}}`
4.  `This is a {c1:cloze} note with {c2:another} type of {c3:id syntax}` -> `This is a {{c1::cloze}} note with {{c2::another}} type of {{c3::id syntax}}`
5.  `This is a {c1|cloze} note with {c2|yet another} type of {c3|id syntax}` -> `This is a {{c1::cloze}} note with {{c2::yet another}} type of {{c3::id syntax}}`
