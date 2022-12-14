# dciq-project

[Design](https://app.moqups.com/PemevsJmVliOXW1qITZDxhX9nBi4jKXH/share)

## Features

### Must-Have

- Liste aller Fragen in Overview-Page
- Create-Question-Page ohne Kategorie
- Question Page
- Login-Flow (Login-Page & Register-Page)
- Account-Page nur mit Titel


### Should-Have

- Kategorie-Tagging (Overview-, Question- und Create-Question-Page)
- Such-Funktion (Overview-Page)
- Show-More Button im Overview-Screen
- Account: Gestellte Fragen


### Nice-to-Have

- User-Avatar
- Account: Beantwortete Fragen
- Email-Bestätigung



## Api Endpoints

### GET /questions

Query-Params

- search=dci (Such-Feld)
- category=JS (Kategorie-Tagging)
- page=1
- userId=123456

Response-Body

```javascript
[
  {
    _id: "123",
    title: "My Title",
    category: "JS",
    numAnswers: 10,
    user: {
      name: "Manuel Jung"
    }
  }
]
```

### GET /questions/:id

Response-Body

```javascript
{
  _id: "123",
  title: "My Title",
  category: "JS",
  description: "foo",
  user: {
    name: "Manuel Jung"
  }
}
```

### GET /answers

Query-Params

- questionId=12lkfklfelkhf21

Response-Body

```javascript
[
  {
    _id: "123",
    description: "foo",
    user: {
      name: "Hans Zimmer"
    }
  }
]
```

### POST /answers

POST-Body

```javascript
{
  description: "foo",
  question: "12lkfklfelkhf21",
}
```

Response-Body

```javascript
{
  _id: "123",
  description: "foo",
  user: {
    name: "Hans Zimmer"
  }
}
```

### POST /questions

POST-Body

```javascript
{
  title: "foo",
  description: "foo",
  category: "JS",
}
```

Response-Body

```javascript
{
  _id: "123",
  title: "foo",
  description: "foo",
  category: "JS",
  user: "12lkfklfelkhf21"
}
```

### POST /user/login

POST-Body

```javascript
{
  email: "my@mail.de",
  password: "123456"
}
```

Response-Body

```javascript
{
  name: "Manuel Jung",
  email: "my@mail.de",
  avatar: "url-to-avatar"
}
```

### POST /user/register

POST-Body

```javascript
{
  email: "my@mail.de",
  password: "123456",
  name: "Manuel Jung",
  avatar: "file",
}
```

Response-Body

```javascript
{
  name: "Manuel Jung",
  email: "my@mail.de",
  avatar: "url-to-avatar"
}
```

### GET /user

Response-Body

```javascript
{
  name: "Manuel Jung",
  email: "my@mail.de",
  avatar: "url-to-avatar"
}
```

### GET /answers/created-by-me

Response-Body

```javascript
[
  {
    _id: '123456',
    description: "foo"
    question: {
      _id: "123",
      title: "My Title",
      category: "JS",
      numAnswers: 10,
      user: {
        name: "Manuel Jung"
      }
    }
  }
]
```


## Workflow

- Für jede Aufgabe erstellen wir uns einen eigenen Branch `git branch -b <branch-name>`
- Wir erledigen alle Aufgaben in diesem Branch
- Wir erstellen einen Pull-Request auf Github (es erscheint ein "create pull-request" button sobald man den branch gepushed hat)
- Wir wählen jemanden aus der das ganze korrigieren soll (eigenes Team-Mitglied). 
- Dieser merged dann den Branch in den main wenn alles passt